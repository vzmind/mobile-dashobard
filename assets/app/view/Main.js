Ext.define('MobileDashboard.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'mainview',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Tquila Mobile Dashboard'
                },

                html: [
                    "Welcome on that Tquila demonstration Sencha app",
                    "You will learn here how to connect your Sencha app to Salesforce",
                    "and how to create beautiful charts with direct data stream from your Org"
                ].join("")
            },
            { xtype: 'leadpanel' },
            {
                title: "By Amount",
                iconCls: 'chart2',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Opportunities by amount'
                    },
                    {
                        xtype: "piechart",
                        title: 'a nice pie'
                    }
                ]
            },
            {
                title: "By Type",
                iconCls: 'chart1',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'By Type'
                    },
                    {
                        xtype: 'opportunitiesbytype',
                        title: 'By Type'
                    }
                ]
            },
            {
                title: "By Rep",
                iconCls: 'chart1',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'By Rep'
                    },
                    {
                        xtype: "opportunitiesbyrep",
                        title: 'By Rep'
                    }
                ]
            },
            {
                title: "By Month",
                iconCls: 'chart2',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'By Month'
                    },
                    {
                        xtype: "opportunitiesbymonth",
                        title: 'By Month'
                    }
                ]
            }
        ]
    }
});
