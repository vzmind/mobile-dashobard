#!/usr/bin/env ruby -I ../lib -I lib
require 'sinatra'
require "sinatra/content_for"
require 'sinatra/reloader'
require 'sinatra/json'
require "sinatra/jsonp"
require 'haml'
require 'databasedotcom'
require 'yaml'
require 'omniauth'
require 'omniauth-salesforce'

  
  enable :sessions


  set :public_folder, File.dirname(__FILE__) + '/assets'

  config = YAML.load_file("config/salesforce.yml") rescue {}
  client_id = config["client_id"]
  client_secret = config["client_secret"]

  
  use OmniAuth::Builder do
    provider :salesforce, config["client_id"], config["client_secret"]
  end

  get '/' do
    haml :intro
  end

  get '/auth/salesforce/callback' do
    token = request.env['omniauth.auth']['credentials']['token']
    session[:token] = token
    config = YAML.load_file("config/salesforce.yml") rescue {}
    @client_id = config["client_id"]
    @client_secret = config["client_secret"]
    dbdc = Databasedotcom::Client.new(:client_id => @client_id, :client_secret => @client_secret)
    dbdc.authenticate :token => session[:token], :instance_url => "http://eu2.salesforce.com"
    session[:client] = dbdc
    redirect '/home'
  end

  get '/home' do
    puts session[:token]
    haml :home
  end

  get '/leads.json' do
    content_type :json
    session[:client].materialize('Lead')
    leads = Lead.all
    puts params[:filter]

    if params[:filter]
      leads = leads[0..2]
    end
          leads.collect! { |obj| {
                          :id    => obj.Id,
                          :name  => obj.LastName,
                          :email => obj.Email,
                          :leadsource => obj.LeadSource,
                          :status => obj.Status,
                          :phone => obj.Phone,
                          :company => obj.Company,
                          :website => obj.Website,
                          :annualrevenue => obj.AnnualRevenue
                        }
                        }.to_json
  end

  get '/opportunities_by_amount.json' do
    content_type :json
    session[:client]
    opps = Opportunity.all
    if params[:year]
      opps = opps.select{|o|o['FiscalYear'] == params[:year].to_i}
    end
    if params[:stagename] && params[:stagename] != 'any'
      opps = opps.select{|o|o['StageName'] == params[:stagename]}
    end
    if params[:probability] && params[:probability] != 'any'
      opps = opps.select{|o|o['Probability'] == params[:probability]}
    end    
    opps.collect! { |obj| {
                    :type  => obj.Name,
                    :amount => obj.Amount
                  }
                  }.to_json
  end

  get '/opportunities_by_type.json' do
    content_type :json
    session[:client].materialize('opportunity')
    opps = Opportunity.all
    if params[:year]
      opps = opps.select{|o|o['FiscalYear'] == params[:year].to_i}
    end
    if params[:stagename] && params[:stagename] != 'any'
      opps = opps.select{|o|o['StageName'] == params[:stagename]}
    end
    if params[:probability] && params[:probability] != 'any'
      opps = opps.select{|o|o['Probability'] == params[:probability]}
    end 
    result = opps.group_by(&:Type).map {|k,v| [k, v.collect{|op|op.Amount}]}.collect{|e| {'type' => e[0], 'amount' => e[1].sum}}
    result.to_json
  end

  get '/opportunities_by_rep.json' do
    content_type :json
    session[:client].materialize('opportunity')
    session[:client].materialize('User')
    opps = Opportunity.all
    if params[:year]
      opps = opps.select{|o|o['FiscalYear'] == params[:year].to_i}
    end
    if params[:stagename] && params[:stagename] != 'any'
      opps = opps.select{|o|o['StageName'] == params[:stagename]}
    end
    if params[:probability] && params[:probability] != 'any'
      opps = opps.select{|o|o['Probability'] == params[:probability]}
    end 
    result = opps.group_by(&:OwnerId).map {|k,v| [k, v.collect{|op|op.Amount}]}.collect{|e| {'type' => e[0], 'amount' => e[1].sum}}
    result.collect{|rep| {'type' => User.find(rep["type"]).Name,'amount' => rep["amount"]}}.to_json
  end

  get '/opportunities_by_month.json' do
    content_type :json
    session[:client].materialize('opportunity')
    opps = Opportunity.all
    if params[:stagename] && params[:stagename] != 'any'
      opps = opps.select{|o|o['StageName'] == params[:stagename]}
    end
    if params[:probability] && params[:probability] != 'any'
      opps = opps.select{|o|o['Probability'] == params[:probability]}
    end 
    r =  opps.group_by(&:FiscalYear).map {|k,v| {'year' => k, 'result' => v.group_by(&:FiscalQuarter).map{|k,v| {'quarter'=>k,'amount'=>v.collect{|op|op.Amount}.sum}}.sort_by{|e|e['quarter']}}}
    r.sort_by!{|y| y['year']}
    result = []
    r.each do |record|
      year = record["year"]
      record['result'].each do |quarter|
        result << {'date' => 'Q'+quarter["quarter"].to_s+'-'+year.to_s, 'amount' => quarter['amount']}
      end
    end
    result.to_json
  end  

 
