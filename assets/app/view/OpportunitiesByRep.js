//==============================================================================================
//VIEWS
//Views display data to your users and gather input from them; 
//they also emit events about your user interaction.
//==============================================================================================
//The Lead list view.
Ext.define("MobileDashboard.view.ByRepContainer", {
    extend: 'Ext.Panel',
    xtype: 'byrepcontainer',
    requires: ['Ext.slider.Slider', 'Ext.picker.Picker'],
    config: {
 
     //Take up the full space available in the parent container.
    layout: {
            type: 'vbox',
            align: 'stretch'
    },
 
    //Add the components to include within the list view. 
    items: [
        {
            xtype: 'opportunitiesbyrep',
        },
        {
          docked: 'right',
          maxWidth: '30%', 
          height: 'auto',
          style: {
            'background': 'white',
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
                },   
            },
            items: [
                   {
                        docked: 'top',
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
                                MobileDashboard.app.loadRep(newvalue,field.parent.getComponent('opportunitytype').getValue(),field.parent.getComponent('opportunityprobability').getValue());
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
                                MobileDashboard.app.loadRep(field.parent.getComponent('opportunityyear').getValue(),newvalue,field.parent.getComponent('opportunityprobability').getValue());
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
                                MobileDashboard.app.loadRep(field.parent.getComponent('opportunityyear').getValue(),field.parent.getComponent('opportunitytype').getValue(),newvalue);
                            }
                        }
                    }    
            ]
            }]
    }]}
});


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