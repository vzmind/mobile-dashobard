Ext.define("MobileDashboard.view.OpportunitiesByRep", {
    extend: "Ext.chart.Chart",
    xtype: "opportunitiesbyrep",
    config:{
        interactions: [{
            type: 'panzoom',
            zoomOnPanGesture: true
        }],
        animate: true,
        width:600,
        height:600,

        store: 'OpportunitiesByRep',
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
                text: 'Sales Name',
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