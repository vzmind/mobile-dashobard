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
            { xtype: 'leadscard' },
            {
                title: "Pie Chart",
                iconCls: 'chart1',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'My first Pie'
                    },
                    {
                        xtype: "piechart",
                        title: 'a nice pie'
                    }
                ]
            },
            {
                title: "Other Chart",
                iconCls: 'chart2',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'My second chart'
                    },
                    {
                        xtype: "otherchart",
                        title: 'An other chart'
                    }
                ]
            }
        ]
    }
});
