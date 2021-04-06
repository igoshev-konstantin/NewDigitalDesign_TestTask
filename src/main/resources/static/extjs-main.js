// Ext.application({
//     name: 'MyApp',
//     launch: function () {
//         //Ext.Msg.alert(this.getName(), 'Ready to go!');
//         Ext.Msg.alert("ееееееееееее");
//     }
// });

Ext.onReady(function () {

    Ext.create('Ext.data.Store', {
        storeId: 'pointStore',
        fields: ['id', 'name', 'pointNumber', 'coordX', 'coordY'],
        data: {
            'items': [
                {'id': '1', 'name': 'p1-415', "pointNumber": "415", "coordX": 54.198708, "coordY": 37.606190},
                {'id': '2', 'name': 'p2-416', "pointNumber": "422", "coordX": 54.298708, "coordY": 37.706191},
                {'id': '3', 'name': 'p3-417', "pointNumber": "444", "coordX": 54.398708, "coordY": 37.806192},
                {'id': '4', 'name': 'p3-418', "pointNumber": "425", "coordX": 54.498708, "coordY": 37.906193},
            ]
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    });

    Ext.create('Ext.grid.Panel', {
        title: 'Points grid',
        height: 200,
        width: 500,
        margin: '20 5 10 5',
        resizable: true,
        stripeRows: true,
        renderTo: 'pointsGrid',
        store: Ext.data.StoreManager.lookup('pointStore'),
        columns: [
            {text: 'Id', type: 'int', dataIndex: 'id', width: 5, flex: 1},
            {text: 'Name', type: 'string', dataIndex: 'name', width: 40, flex: 1},
            {text: 'Number', type: 'string', dataIndex: 'pointNumber', width: 4, flex: 1},
            {text: 'Coordinate X', type: 'float',  dataIndex: 'coordX'},
            {text: 'Coordinate Y', type: 'float', dataIndex: 'coordY'},

            {
                xtype: 'actioncolumn',
                width: 70,
                items: [{
                    icon: '../icons/edit.png',  // Use a URL in the icon config
                    tooltip: 'edit',
                    id: 'editRowId',
                    style: {
                        width: '95%',
                        margin: '5px 0px 5px 0'
                    },
                    handler: function (grid, rowIndex, colIndex) {

                        var rec = grid.getStore().getAt(rowIndex);
                        console.log(rec);
                        console.log(rowIndex);
                        alert("Edit");
                        //var lastItem = grid.getStore().data.items.length;

                        // var lastItem = grid.getStore().items.length;
                        // alert(lastItem + 1);
                        // var rec = grid.getStore().getAt(rowIndex);
                        // alert("Add " + rec.get('id'));

                    }
                },
                    {
                        icon: '../icons/delete.png',  // Use a URL in the icon config
                        tooltip: 'delete',
                        id: 'deleteRowId',
                        margin: ('0 5 0 5'),
                        handler: function (grid, rowIndex, colIndex) {
                            alert("delete: " + rowIndex);
                        }
                    }]
            }
        ]
    });

    Ext.create('Ext.Button', {
        text: 'Add new row',
        minWidth: '100',
        style: {
            margin: '10px 10px 10px 10px'
        },
        renderTo: "btnAddNewRow",
        handler: function () {
            window.location.replace("/addNewPoint");
        }
    })

});

//#
