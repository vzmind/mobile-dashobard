Ext.define("MobileDashboard.view.PieChart", {
    extend: "Ext.chart.PolarChart",
    xtype: "piechart",
    config:{
        animate: true,
        width:800,
        height:600,
        themeCls: 'pie1',
        theme: 'Demo',
        shadow: false,
        insetPadding: 20,
        legend: {
            position: 'left',
            width: 200
        },
        interactions: [{
        type: 'rotate'},{
        type: 'iteminfo',
            listeners: {
                show: function(me, item, panel) {
                    panel.setHtml('Opportunity expected amount: $ ' + item.record.get('amount'));
                }
        }}],
        colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809", "#ffd13e"],
        store: 'OpportunitiesByAmount',

        series: [{
            type: 'pie',
            labelField: 'type',
            xField: 'amount',
            donut: 30,
            highlight: {
              segment: {
                margin: 20
              }
            },


            }
        ]
        
    }
});