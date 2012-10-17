Ext.define("MobileDashboard.view.OtherChart", {
    extend: "Ext.chart.CartesianChart",
    xtype: "otherchart",
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
            fill: true,
            xField: 'name',
            yField: 'data3',
            marker: {
                type: 'circle',
                radius: 4,
                lineWidth: 0
            }
        }]
        
    }
});