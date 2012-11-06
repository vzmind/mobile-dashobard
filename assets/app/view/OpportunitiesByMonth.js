//==============================================================================================
//VIEWS
//Views display data to your users and gather input from them; 
//they also emit events about your user interaction.
//==============================================================================================
//The Lead list view.
Ext.define("MobileDashboard.view.ByMonthContainer", {
    extend: 'Ext.Panel',
    xtype: 'bymonthcontainer',
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
            xtype: 'opportunitiesbymonth',
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
                        id: 'opportunitytype3',
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
                                MobileDashboard.app.loadMonth(newvalue,field.parent.getComponent('opportunityprobability3').getValue());
                            }
                        }
                    },
                    {
                        id: 'opportunityprobability3',
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
                                MobileDashboard.app.loadMonth(field.parent.getComponent('opportunitytype3').getValue(),newvalue);
                            }
                        }
                    }    
            ]
            }]
    }]}
});


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