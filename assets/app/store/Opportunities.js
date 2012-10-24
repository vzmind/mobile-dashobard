Ext.define("MobileDashboard.store.Opportunities", {
    extend: "Ext.data.Store",
    model: 'MobileDashboard.model.Opportunity',
    sorters: 'stage',
    groupField: 'stage',
    proxy: {
        type: 'ajax',
        url : 'opportunities.json'
    }
});