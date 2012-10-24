//==============================================================================================  
//MODELS
//Models are the objects on your application.
//==============================================================================================  

Ext.define('MobileDashboard.model.Opportunity', {
    extend: 'Ext.data.Model',
    config: {
      fields: ['id','name', 'amount','account','stage','probability']
    }

});