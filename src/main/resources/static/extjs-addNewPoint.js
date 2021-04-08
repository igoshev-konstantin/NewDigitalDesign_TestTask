Ext.onReady(function () {

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
            id: "item_fields",
            items: [{
                fieldLabel: 'id',
                inputType: "text",
                hidden: true,
                id: "id"
            }, {
                fieldLabel: 'Name',
                inputType: "text",
                id: "name"
            }, {
                fieldLabel: 'Point number',
                id: "pointNumber",
                inputType: "number"
            }, {
                fieldLabel: 'X',
                id: "coordX",
                inputType: "number",
                maxLength: 9
            }, {
                fieldLabel: 'Y',
                id: "coordY",
                inputType: "number",
                maxLength: 9
            }]
        }]
    });

    //Инициализация кнопки. Вешаем на нее событие инициализации POST запроса отправки данных
    Ext.create('Ext.Button', {
        text: 'Save',
        minWidth: '100',
        style: {
            margin: '10px 10px 10px 10px'
        },
        renderTo: "btnSave",
        handler: function () {
            const id = document.getElementById("id-inputEl").value;
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

    function fill_fields() {
        console.log("Update")
        Ext.getCmp('id').setValue(document.getElementById("pointName_in").value);
        Ext.getCmp('name').setValue(document.getElementById("pointName_in").value);
        Ext.getCmp('pointNumber').setValue(document.getElementById("pointNumber_in").value);
        Ext.getCmp('coordX').setValue(document.getElementById("pointCoordX_in").value);
        Ext.getCmp('coordY').setValue(document.getElementById("pointCoordY_in").value);
    }
  //Кнопке
    Ext.create('Ext.Button', {
        text: 'Update',
        minWidth: '100',
        style: {
            margin: '10px 10px 10px 10px'
        },
        renderTo: "btnUpdate",
        handler: fill_fields()
    })
});