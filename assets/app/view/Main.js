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
                    "<div class='main'><img class='main' src='/images/logo_tquila.png'>",
                    "Welcome on that Tquila demonstration Sencha app.<br/>",
                    "This Sencha app is connected to Salesforce,<br/>",
                    "gather leads from your orgs to create interactive list<br/>",
                    "and Opportunities stats to draw beautiful charts.<br/>",
                    "Enjoy it, Tquila Labs Team</div>"
                ].join("")
            },
            { xtype: 'leadpanel' }
        ]
    }
});
