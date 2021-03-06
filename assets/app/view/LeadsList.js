//==============================================================================================
//VIEWS
//Views display data to your users and gather input from them; 
//they also emit events about your user interaction.
//==============================================================================================
//The Lead list view.
Ext.define("MobileDashboard.view.LeadsList", {
    extend: 'Ext.Container',
    xtype: 'leadscard',
 
  //It uses the base list class.
  requires: "Ext.dataview.List", 
  alias: "widget.leadslistview",
 
  config: {
 
    iconCls: 'user_business',
    title: 'Leads',

  //Take up the full space available in the parent container.
    layout: {
      type: 'fit'
    },
 
    //Add the components to include within the list view. 
    items: [
    {
      //The main list and its properties. 
      xtype: "list",
      store: "Leads",
      grouped: true,
      onItemDisclosure: true,

      //The template for display if the Store is empty of records.
      //Note the style to control visual presentation.
      loadingText: "Loading Leads...",
      emptyText: '<div class="leads-list-empty-text">No leads found.</div>',
 
      //The template for the display of each list item representing one record.
      //One row will display for each record in the data Store.
      //The fields referenced are from the entity's Model. 
      itemTpl: '<div class="list-item-line-main"><strong>{name}</strong></div><div class="list-item-line-detail">{company}</div>'
    }]
  }
});