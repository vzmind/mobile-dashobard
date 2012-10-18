//==============================================================================================
//VIEWS
//Views display data to your users and gather input from them; 
//they also emit events about your user interaction.
//==============================================================================================
//The Lead list view.
Ext.define("MobileDashboard.view.LeadPanel", {
    extend: 'Ext.navigation.View',
    xtype: 'leadpanel',
 
  //It uses the base list class.
  requires: ["MobileDashboard.view.LeadsList",
             "MobileDashboard.view.LeadDetail"], 
  alias: "widget.leadslistview",
 
  config: {
 
    iconCls: 'user_business',
    title: 'Leads',

    //Add the components to include within the list view. 
    items: [
    {
      //The main list and its properties. 
      xtype: "leadscard",
    }]
  }
});