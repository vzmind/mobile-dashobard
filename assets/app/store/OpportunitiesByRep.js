Ext.define("MobileDashboard.store.OpportunitiesByRep", {
    extend: "Ext.data.Store",
    config:{
    	model: 'MobileDashboard.model.Opportunity',
	    sorters: 'stage',
	    groupField: 'stage',
	    proxy: {
	        type: 'ajax',
	        url : 'http://tquila-mobile-dashboard.herokuapp.com/opportunities_by_rep.json'
	        //url : 'http://127.0.0.1:3000/opportunities_by_rep.json'
	    }
	}
});