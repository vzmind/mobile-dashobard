Ext.define("MobileDashboard.store.OpportunitiesByRep", {
    extend: "Ext.data.Store",
    config:{
    	model: 'MobileDashboard.model.Opportunity',
	    sorters: 'stage',
	    groupField: 'stage',
	    proxy: {
	        type: 'ajax',
	        url : 'https://127.0.0.1:3000/opportunities_by_rep.json'
	    }
	}
});