Ext.define("MobileDashboard.store.OpportunitiesByMonth", {
    extend: "Ext.data.Store",
    config:{
	    fields: ['date','amount'],
	    proxy: {
	        type: 'ajax',
	        url : 'https://127.0.0.1:3000/opportunities_by_month.json'
	    }
	}
});