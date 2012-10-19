//==============================================================================================
//VIEWS
//Views display data to your users and gather input from them; 
//they also emit events about your user interaction.
//==============================================================================================
//The Lead list view.
Ext.define("MobileDashboard.view.LeadDetail", {
    extend: 'Ext.Panel',
    xtype: 'leaddetail',

  config: {
    styleHtmlContent: true,
    scrollable: 'vertical',
    title: 'More about {name}',
    tpl: ['<div class="list-item-line-main"><strong>{name}</strong></div>',
    	 '<div class="list-item-line-detail">Company: {company}</div>',
    	 '<div class="list-item-line-detail">Email: {email}</div>',
    	 '<div class="list-item-line-detail">Phone: {phone}</div>',
    	 '<div class="list-item-line-detail">LeadSource: {leadsource}</div>',
    	 '<div class="list-item-line-detail">Website: {website}</div>',
    	 '<div class="list-item-line-detail">Annual Revenue: {annualrevenue}</div>',
    	 '<div class="list-item-line-detail">Status: {status}</div>']

  }
});