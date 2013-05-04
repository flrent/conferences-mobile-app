Ext.define('Conference.view.about.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'aboutMain',

    config: {
        title:'About',
        iconCls:'info',
        items:[
            {
                title:'About',
                scrollable:true,
                layout:{
                    type:'vbox'
                },
                cls:'about',
                items:[
                    {
                        cls:'image',
                        html:'<img src="/resources/images/logo.png">',
                        flex:0.8
                    },
                    {
                        flex:1.2,
                        xtype:'dataview',
                        scrollable:false,
                        data:[
                            {
                                "title":"History",
                                "goto":"history"
                            },
                            {
                                "title":"How to come",
                                "goto":"location"
                            }
                        ],
                        itemCls:"menu",
                        selectedItemCls:'selected',
                        itemTpl:"<h4>{title}</h4>"
                    }
                ]
            }
        ]
    }
});