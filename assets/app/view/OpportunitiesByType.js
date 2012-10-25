Ext.define("MobileDashboard.view.OpportunitiesByType", {
    extend: "Ext.chart.Chart",
    xtype: "opportunitiesbytype",
    config:{
        animate: true,
        width:600,
        height:600,

        store: 'OpportunitiesByType',
        axes: [{
            type: 'numeric',
            position: 'left',
            title: {
                text: 'Amount in $',
                fontSize: 15
            },
            fields: 'amount'
        }, {
            type: 'category',
            position: 'bottom',
            title: {
                text: 'Opportunity Type',
                fontSize: 15
            },
            fields: 'type'
        }],
        series: [{
            type: 'bar',
            xField: 'type',
            yField: 'amount',
            style: {
              fill: 'orange'
            }
        }]
        
    }
});