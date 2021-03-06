//==============================================================================================
//VIEWS
//Views display data to your users and gather input from them; 
//they also emit events about your user interaction.
//==============================================================================================
//The Lead list view.
Ext.define("MobileDashboard.view.ByTypeContainer", {
    extend: 'Ext.Panel',
    xtype: 'bytypecontainer',
    requires: ['Ext.slider.Slider', 'Ext.picker.Picker','Ext.chart.series.Bar'],
    config: {
 
     //Take up the full space available in the parent container.
    layout: {
            type: 'vbox',
            align: 'stretch'
    },
 
    //Add the components to include within the list view. 
    items: [
        {
            xtype: 'opportunitiesbytype'
        },
        {
          docked: 'right',
          maxWidth: '30%', 
          height: 'auto',
          style: {
            'background': 'white'
          },  
          items: [
            {
            xtype: 'formpanel',
            defaults: {
                docked: 'top',
                labelWidth: '35%',
                centered: true,
                style: {
                    'background': 'white'
                }
            },
            items: [
                   {
                        docked: 'top',
                        xtype: 'label',
                        style: {
                            'font-size' :'smaller'
                        },
                        cls: ['yearlabel', 'x-title'],
                        html: '2009'
                    },
                    {
                        id: 'opportunityyear4',
                        xtype: "sliderfield",
                        minValue: 2009,
                        maxValue: 2012,
                        width: 200,
                        increment: 1,
                        value: 2012,
                        listeners: {
                            change: function (field,sl,thumb, newvalue,oldvalue,opts) {
                                //Ext.getCmp('currentYearLabel').setTitle('Data For ' + newvalue);
                                MobileDashboard.app.loadType(newvalue,field.parent.getComponent('opportunitytype4').getValue(),field.parent.getComponent('opportunityprobability4').getValue());
                            }
                        }
                    },
                    {
                        xtype: 'label',
                        style: {
                            'font-size': 'smaller'
                        },
                        cls: ['yearlabel', 'x-title'],
                        html: '2012'
                    },
                    {
                        id: 'opportunitytype4',
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
                                MobileDashboard.app.loadType(field.parent.getComponent('opportunityyear4').getValue(),newvalue,field.parent.getComponent('opportunityprobability4').getValue());
                            }
                        }
                    },
                    {
                        id: 'opportunityprobability4',
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
                            {text: '100%', value: '100'}
                        ],
                        listeners: {
                            change: function (field, newvalue, oldvalue, opts) {
                                //Ext.getCmp('currentYearLabel').setTitle('Data For ' + newvalue);
                                MobileDashboard.app.loadType(field.parent.getComponent('opportunityyear4').getValue(),field.parent.getComponent('opportunitytype4').getValue(),newvalue);
                            }
                        }
                    }    
            ]
            }]
    }]}
});

Ext.define("MobileDashboard.view.OpportunitiesByType", {
    extend: "Ext.chart.Chart",
    xtype: "opportunitiesbytype",
    config:{
        interactions: [{
            type: 'panzoom',
            zoomOnPanGesture: true
        }],        
        animate: true,
        width:'70%',
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