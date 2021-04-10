Ext.onReady(function () {

    //Объявим модель
    Ext.define('myModel', {
        extend: 'Ext.data.Model',
        fields: ['id', 'name', 'pointNumber', 'coordX', 'coordY']
    });

    //Подключим store autoload
    Ext.create('Ext.data.Store', {
        model: 'myModel',
        storeId: "pointStore",
        pageSize: 50,
        proxy: {
            type: 'ajax',
            url: '/api/getAllPoints',
            method: "GET",
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        autoLoad: true
    });

    //Создадим grid с загрузкой store
    Ext.create('Ext.grid.Panel', {
        title: 'Points grid',
        height: 200,
        width: 500,
        margin: '20 5 10 5',
        resizable: true,
        stripeRows: true,
        buffered: true,
        renderTo: 'pointsGrid',
        id: 'gridId',
        store: Ext.data.StoreManager.lookup('pointStore'),
        columns: [
            {text: 'Id', type: 'int', dataIndex: 'id', width: 5, flex: 1},
            {text: 'Name', type: 'string', dataIndex: 'name', width: 40, flex: 1},
            {text: 'Number', type: 'string', dataIndex: 'pointNumber', width: 4, flex: 1},
            {text: 'Coordinate X', type: 'float', dataIndex: 'coordX'},
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
                        const id = grid.getStore().getAt(rowIndex).data.id;
                        window.location.replace(`/addNewPoint?id=${id}`);
                        console.log("Edit");
                    }
                },
                    {
                        icon: '../icons/delete.png',  // Use a URL in the icon config
                        tooltip: 'delete',
                        id: 'deleteRowId',
                        margin: ('0 5 0 5'),
                        handler: function (grid, rowIndex, colIndex) {
                            const id = grid.getStore().getAt(rowIndex).data.id;
                            //console.dir(id);
                            fetch(`/api/delete/${id}`).then(resp => {
                                if (resp.status == 200)
                                    window.location.replace("/map")
                            });
                        }
                    }],
            }
        ]
    });

    //Кнопке
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

    Ext.create('Ext.Button', {
        text: 'Show marker',
        minWidth: '100',
        style: {
            margin: '10px 10px 10px 10px'
        },
        renderTo: "btnShowMarker",
        handler: function () {
            // let currentRow = Ext.getCmp("gridId").getSelectionModel().getSelection()[0].data;
            let selection = Ext.getCmp("gridId").getSelectionModel().getSelection();
            if (selection.lenght == undefined) {
                let currentRow = selection[0].data;
                let marker = L.marker([currentRow.coordX, currentRow.coordY]).addTo(mymap);
            }
        }
    })

    Ext.create('Ext.Button', {
        text: 'Show all markers',
        minWidth: '100',
        style: {
            margin: '10px 10px 10px 10px'
        },
        renderTo: "btnShowAllMarkers",
        handler: function () {
            console.log("show all");
            let elements = Ext.getCmp("gridId").getSelectionModel().getStore().data.items;
            elements.forEach(element =>
                L.marker([element.data.coordX, element.data.coordY]).addTo(mymap)
            );
        }
    })
})
;
