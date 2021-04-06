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
        id: "newPointId",
        title: 'new point properties',
        labelWidth: 75, // label settings here cascade unless overridden
        frame: true,
        bodyStyle: 'padding:5px 5px 0',
        width: 550,
        //renderTo: 'point',
        renderTo: "pointPanel",
        layout: 'column', // arrange fieldsets side by side
        items: [{

            xtype: 'fieldset',
            columnWidth: 0.5,
            //title: 'Fieldset 1',
            //collapsible: true,
            defaultType: 'textfield',
            defaults: {anchor: '100%'},
            layout: 'anchor',
            items: [{
                fieldLabel: 'Name',
                inputType: "text",
                //name: 'name',
                id: "name"
            }, {
                fieldLabel: 'Point number',
                //name: 'pointNumber',
                id: "pointNumber",
                inputType: "number"
            }, {
                fieldLabel: 'X',
                //name: 'coordX',
                id: "coordX",
                inputType: "number",
                maxLength: 9
            }, {
                fieldLabel: 'Y',
                //name: 'coordY',
                id: "coordY",
                inputType: "number",
                maxLength: 9
            }]
        }]
    });

    Ext.create('Ext.Button', {
        text: 'Save',
        minWidth: '100',
        style: {
            margin: '10px 10px 10px 10px'
        },
        renderTo: "btnSave",
        handler: function () {
            const name = document.getElementById("name-inputEl").value;
            const pointNumber = document.getElementById("pointNumber-inputEl").value;
            const coordX = document.getElementById("coordX-inputEl").value;
            const coordY = document.getElementById("coordY-inputEl").value;

            const params = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    id: null,
                    name: name,
                    pointNumber: pointNumber,
                    coordX: coordX,
                    coordY: coordY
                })
            };

            fetch("/api/savePoint", params).then(resp => {
                if (resp.status == 200)
                    window.location.replace("/")
            });
        }
    })

    Ext.create('Ext.Button', {
        text: 'Cancel',
        minWidth: '100',
        style: {
            margin: '10px 10px 10px 10px'
        },
        renderTo: "btnSave",
        handler: function () {
            window.location.replace("/");
        }
    })

});