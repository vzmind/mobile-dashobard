Ext.define("MobileDashboard.store.OpportunitiesByMonth", {
    extend: "Ext.data.Store",
    fields: ['date','amount'],
    proxy: {
        type: 'ajax',
        url : 'opportunities_by_month.json'
    }
});