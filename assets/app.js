//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'MobileDashboard': 'app'
});
//</debug>

Ext.application({
    name: 'MobileDashboard',

    requires: [
        'Ext.slider.Slider',
        'Ext.picker.Picker',
        'MobileDashboard.view.Main',
        'MobileDashboard.view.LeadPanel',
        'MobileDashboard.view.PieChart',
        'MobileDashboard.view.OpportunitiesByType',
        'MobileDashboard.view.OpportunitiesByRep',
        'MobileDashboard.view.OpportunitiesByMonth',        
        'MobileDashboard.store.SampleStore',
        'MobileDashboard.store.OpportunitiesByAmount',
        'MobileDashboard.store.OpportunitiesByType',
        'MobileDashboard.store.OpportunitiesByRep',
        'MobileDashboard.store.OpportunitiesByMonth'
    ],
    controllers : [
        'App'
    ],
    models: ["Lead","Opportunity"],
    stores: ["Leads","OpportunitiesByAmount","OpportunitiesByType","OpportunitiesByRep","OpportunitiesByMonth"],
    views: ['PieChart'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        //Load up the Store associated with the controller and its views. 
        console.log("load Leads");
        var leadsStore = Ext.getStore("Leads");
        leadsStore.load();

        //Load up the Store associated with the controller and its views. 
        console.log("load Opportunities");

        var opportunitiesByMonthStore = Ext.getStore("OpportunitiesByMonth");
        opportunitiesByMonthStore.load();

        MobileDashboard.app.loadPieAtYear(2012,'any','any');


        var opportunitiesByTypeStore = Ext.getStore("OpportunitiesByType");
        opportunitiesByTypeStore.load();

        var opportunitiesByRepStore = Ext.getStore("OpportunitiesByRep");
        opportunitiesByRepStore.load();



        Ext.Viewport.setLayout('fit');
        // Initialize the main view
        Ext.Viewport.add(
            {
                xtype: 'mainview'
            });
    },

    loadPieAtYear: function (year,type,probability) {
        currentYear = year || 2012;
        currentType = type || 'any';
        currentProbability = probability || 'any';
        var opportunitiesByAmountStore = Ext.getStore("OpportunitiesByAmount");
        var p = opportunitiesByAmountStore.getProxy();
        p.setUrl('opportunities_by_amount.json?year=' + year + '&stagename=' + type + '&probability=' + probability);
        opportunitiesByAmountStore.setProxy(p);
        opportunitiesByAmountStore.load();
    },

    loadType: function (year,type,probability) {
        currentYear = year || 2012;
        currentType = type || 'any';
        currentProbability = probability || 'any';
        var opportunitiesByTypeStore = Ext.getStore("OpportunitiesByType");
        var p = opportunitiesByTypeStore.getProxy();
        p.setUrl('opportunities_by_type.json?year=' + year + '&stagename=' + type + '&probability=' + probability);
        opportunitiesByTypeStore.setProxy(p);
        opportunitiesByTypeStore.load();
    },

    loadRep: function (year,type,probability) {
        currentYear = year || 2012;
        currentType = type || 'any';
        currentProbability = probability || 'any';
        var opportunitiesByRepStore = Ext.getStore("OpportunitiesByRep");
        var p = opportunitiesByRepStore.getProxy();
        p.setUrl('opportunities_by_rep.json?year=' + year + '&stagename=' + type + '&probability=' + probability);
        opportunitiesByRepStore.setProxy(p);
        opportunitiesByRepStore.load();
    },


    loadMonth: function (type,probability) {
        currentType = type || 'any';
        currentProbability = probability || 'any';
        var opportunitiesByMonthStore = Ext.getStore("OpportunitiesByMonth");
        var p = opportunitiesByMonthStore.getProxy();
        p.setUrl('opportunities_by_month.json?stagename=' + type + '&probability=' + probability);
        opportunitiesByMonthStore.setProxy(p);
        opportunitiesByMonthStore.load();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});


