Ext.define("MobileDashboard.view.PieChart", {
    extend: "Ext.chart.PolarChart",
    xtype: "piechart",
    config:{
        animate: true,
        width:600,
        height:600,
        themeCls: 'pie1',
        theme: 'Demo',
        shadow: false,
        insetPadding: 20,
        legend: {
            position: 'left'
        },
        interactions: [
                        {
                            type: 'rotate'
                        },
                      ],
        colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e"],
        store: 'SampleStore',

        series: [{
            type: 'pie',
            labelField: 'name',
            xField: 'data3',
            donut: 30,


            }
        ]
        
    }
});