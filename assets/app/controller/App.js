Ext.define("MobileDashboard.controller.App", {
    extend: "Ext.app.Controller",

    config: {
        models : [
        ],
        stores : [
            'MobileDashboard.store.SampleStore'
        ],
        routes: {

        },
        refs: {
            main: 'leadpanel'
        },
        control: {
            list: {
                disclose : 'showDetail'

            }
        }
    },

    showDetail :function(list,record){
        this.getMain().push({
            xtype: 'leaddetail',
            data: record.getData()
        })
    }
 });