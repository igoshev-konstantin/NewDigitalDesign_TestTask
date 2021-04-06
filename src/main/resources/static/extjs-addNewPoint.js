Ext.onReady(function () {
    // Ext.define('Point', {
    //     extend: 'Ext.data.Model',
    //     renderTo: 'point',
    //     fields: [
    //         'name', 'email',
    //         {name: 'age', type: 'int'},
    //         {name: 'gender', type: 'string', defaultValue: 'Unknown'}
    //     ]
    // });

    // Ext.create('Ext.form.Panel', {
    //     title: 'Point properties',
    //     width: 550,
    //     bodyPadding: 10,
    //     renderTo: 'point',
    //     items: [
    //         {
    //             xtype: 'fieldcontainer',
    //             fieldLabel: 'name',
    //             name: 'name',
    //             labelWidth: 100,
    //             layout: 'hbox',
    //             xtype: 'textfield',
    //             flex: 1
    //         },
    //         {
    //             xtype: 'fieldcontainer',
    //             fieldLabel: 'point number',
    //             name: 'pointNumber',
    //             labelWidth: 30,
    //             layout: 'hbox',
    //             xtype: 'textfield',
    //         },
    //         {
    //             xtype: 'fieldcontainer',
    //             fieldLabel: 'X',
    //             name: 'coordX',
    //             labelWidth: 30,
    //             layout: 'hbox',
    //             xtype: 'textfield'
    //         },
    //         {
    //             xtype: 'fieldcontainer',
    //             fieldLabel: 'Y',
    //             name: 'coordY',
    //             labelWidth: 30,
    //             layout: 'hbox',
    //             xtype: 'textfield'
    //         }
    //     ]
    // });

    Ext.create('Ext.form.Panel', {
        title: 'new point properties',
        labelWidth: 75, // label settings here cascade unless overridden
        //url: 'save-form.php',
        frame: true,
        bodyStyle: 'padding:5px 5px 0',
        width: 550,
        //renderTo: 'point',
        renderTo: Ext.getBody(),
        layout: 'column', // arrange fieldsets side by side
        items: [{
            // Fieldset in Column 1 - collapsible via toggle button
            xtype: 'fieldset',
            columnWidth: 0.5,
            title: 'Fieldset 1',
            collapsible: true,
            defaultType: 'textfield',
            defaults: {anchor: '100%'},
            layout: 'anchor',
            items: [{
                fieldLabel: 'Name',
                name: 'name'
            }, {
                fieldLabel: 'Point number',
                name: 'pointNumber'
            }, {
                fieldLabel: 'X',
                name: 'coordX'
            }, {
                fieldLabel: 'Y',
                name: 'coordY'
            }]
        }]
    });
});