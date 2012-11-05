//==============================================================================================
//VIEWS
//Views display data to your users and gather input from them; 
//they also emit events about your user interaction.
//==============================================================================================
//The Lead list view.
Ext.define("MobileDashboard.view.PieContainer", {
    extend: 'Ext.Panel',
    xtype: 'piecontainer',
    requires: ['Ext.slider.Slider', 'Ext.picker.Picker'],
    config: {
 
    title: 'Leads',

     //Take up the full space available in the parent container.
    layout: {
            type: 'hbox',
            align: 'stretch'
    },
 
    //Add the components to include within the list view. 
    items: [
        {
            xtype: 'piechart',
        },
        {
          docked: 'bottom',
          maxWidth: 'auto', 
          style: {
            'background': 'white',
          },  
          items: [
            {
            xtype: 'formpanel',
            defaults: {
                docked: 'left',
                labelWidth: '35%',
                centered: true,
                style: {
                    'background': 'white'
                },   
            },
            items: [
                   {
                        xtype: 'label',
                        style: {
                            'font-size' :'smaller',
                        },
                        cls: ['yearlabel', 'x-title'],
                        html: '2009'
                    },
                    {
                        id: 'opportunityyear',
                        xtype: "sliderfield",
                        minValue: 2009,
                        maxValue: 2012,
                        width: 200,
                        increment: 1,
                        value: 2012,
                        listeners: {
                            change: function (field,sl,thumb, newvalue,oldvalue,opts) {
                                //Ext.getCmp('currentYearLabel').setTitle('Data For ' + newvalue);
                                MobileDashboard.app.loadPieAtYear(newvalue,field.parent.getComponent('opportunitytype').getValue(),field.parent.getComponent('opportunityprobability').getValue());
                            }
                        }
                    },
                    {
                        xtype: 'label',
                        style: {
                            'font-size': 'smaller',
                        },
                        cls: ['yearlabel', 'x-title'],
                        html: '2012'
                    },
                    {
                        id: 'opportunitytype',
                        xtype: 'selectfield',
                        label: 'Stage',
                        options: [
                            {text: 'any', value: 'any'},
                            {text: 'open', value: 'Open'},
                            {text: 'closed', value: 'Won'},
                            {text: 'closed won', value: 'Closed Won'}
                        ],
                        listeners: {
                            change: function (field, newvalue, oldvalue, opts) {
                                //Ext.getCmp('currentYearLabel').setTitle('Data For ' + newvalue);
                                MobileDashboard.app.loadPieAtYear(field.parent.getComponent('opportunityyear').getValue(),newvalue,field.parent.getComponent('opportunityprobability').getValue());
                            }
                        }
                    },
                    {
                        id: 'opportunityprobability',
                        xtype: 'selectfield',
                        label: 'Probability',
                        options: [
                            {text: 'any', value: 'any'},
                            {text: '10%', value: '10'},
                            {text: '20%', value: '20'},
                            {text: '30%', value: '30'},
                            {text: '40%', value: '40'},
                            {text: '50%', value: '50'},
                            {text: '60%', value: '60'},
                            {text: '70%', value: '70'},
                            {text: '80%', value: '80'},
                            {text: '90%', value: '90'},
                            {text: '100%', value: '100'},
                        ],
                        listeners: {
                            change: function (field, newvalue, oldvalue, opts) {
                                //Ext.getCmp('currentYearLabel').setTitle('Data For ' + newvalue);
                                MobileDashboard.app.loadPieAtYear(field.parent.getComponent('opportunityyear').getValue(),field.parent.getComponent('opportunitytype').getValue(),newvalue);
                            }
                        }
                    }    
            ]
            }]
    }]}
});

Ext.define("MobileDashboard.view.PieChart", {
    extend: "Ext.chart.PolarChart",
    xtype: "piechart",
    config:{
        animate: true,
        width:'100%',
        height:500,
        themeCls: 'pie1',
        theme: 'Demo',
        shadow: false,
        insetPadding: 20,
        legend: {
            position: 'left',
            width: 200,
            height: 500
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
