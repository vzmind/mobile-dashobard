Ext.define("MobileDashboard.store.OpportunitiesByRep", {
    extend: "Ext.data.Store",
    model: 'MobileDashboard.model.Opportunity',
    sorters: 'stage',
    groupField: 'stage',
    proxy: {
        type: 'ajax',
        url : 'opportunities_by_rep.json'
    }
});