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
require "redis-store"

  
  use Rack::Session::Redis, :redis_server => ENV['REDISTOGO_URL']


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
    dbdc.authenticate :token => session[:token], :instance_url => "http://na14.salesforce.com"
    session[:client] = dbdc

    puts 'client 1'
    puts dbdc
    puts session[:client]
    redirect '/home'
  end

  get '/home' do
    haml :home
  end

  get '/leads.json' do
    content_type :json
    puts 'client 2'
    puts session[:client]

    session[:client].materialize('Lead')
    leads = Lead.all
          leads.collect! { |obj| {
                          :id    => obj.Id,
                          :name  => obj.LastName,
                          :email => obj.Email}
                        }.to_json
  end



 
