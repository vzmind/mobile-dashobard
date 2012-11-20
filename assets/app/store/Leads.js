//==============================================================================================
//STORES
//Stored serve as the client-side cache of your data; they loading data into your app's views. 
//==============================================================================================
//The Lead Store, this version will simply load with mock JSON data.

//The Store contains the AjaxProxy as an inline configuration
Ext.define("MobileDashboard.store.Leads", {
    extend: "Ext.data.Store",
    config: {
        model: 'MobileDashboard.model.Lead',
        sorters: 'company',
        grouper: function(record){
        	return record.get('company');
        },
        proxy: {
            type: 'ajax',
            url : 'http://tquila-mobile-dashboard.herokuapp.com/leads.json'
            //url : 'http://127.0.0.1:3000/leads.json'
        }
    }
});