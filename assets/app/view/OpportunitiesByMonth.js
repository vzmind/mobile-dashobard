Ext.define("MobileDashboard.view.OpportunitiesByMonth", {
    extend: "Ext.chart.CartesianChart",
    xtype: "opportunitiesbymonth",
    config:{
        animate: true,
        width:800,
        height:600,

        store: 'OpportunitiesByMonth',
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['amount'],
            title: {
                text: 'Amount in $',
                fontSize: 15
            },
            grid: true,
            minimum: 0
        }, {
            type: 'category',
            position: 'bottom',
            fields: ['date'],
            title: {
                text: 'Date',
                fontSize: 15
            }
        }],
        series: [{
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            style: {
                stroke: 'rgb(143,203,203)'
            },
            xField: 'date',
            yField: 'amount',
            marker: {
                type: 'path',
                path: ['M', -2, 0, 0, 2, 2, 0, 0, -2, 'Z'],
                stroke: 'blue',
                lineWidth: 0
            }
        }]
        
    }
});