Ext.define("MobileDashboard.view.OpportunitiesByMonth", {
    extend: "Ext.chart.CartesianChart",
    xtype: "opportunitiesbymonth",
    config:{
        animate: true,
        width:600,
        height:600,

        store: 'SampleStore',
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['data1'],
            title: {
                text: 'Sample Values',
                fontSize: 15
            },
            grid: true,
            minimum: 0
        }, {
            type: 'category',
            position: 'bottom',
            fields: ['name'],
            title: {
                text: 'Sample Values',
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
            xField: 'name',
            yField: 'data1',
            marker: {
                type: 'path',
                path: ['M', -2, 0, 0, 2, 2, 0, 0, -2, 'Z'],
                stroke: 'blue',
                lineWidth: 0
            }
        }, {
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            style: {
                stroke: 'rgb(143,103,103)'
            },
            xField: 'name',
            yField: 'data3',
            marker: {
                type: 'path',
                path: ['M', -2, 0, 0, 2, 2, 0, 0, -2, 'Z'],
                stroke: 'red',
                lineWidth: 0
            }
        },{
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            fill: true,
            xField: 'name',
            yField: 'data5',
            marker: {
                type: 'path',
                radius: 4,
                lineWidth: 0
            }
        }]
        
    }
});