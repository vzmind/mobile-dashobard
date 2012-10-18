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
    title: 'Details',
    tpl: 'Hello, {name}'

  }
});