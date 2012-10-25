Ext.define("MobileDashboard.store.OpportunitiesByType", {
    extend: "Ext.data.Store",
    model: 'MobileDashboard.model.Opportunity',
    sorters: 'stage',
    groupField: 'stage',
    proxy: {
        type: 'ajax',
        url : 'opportunities_by_type.json'
    }
});