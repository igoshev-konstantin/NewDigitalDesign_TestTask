// Ext.application({
//     name: 'MyApp',
//     launch: function () {
//         //Ext.Msg.alert(this.getName(), 'Ready to go!');
//         Ext.Msg.alert("ееееееееееее");
//     }
// });

Ext.onReady(function () {

    Ext.create('Ext.data.Store', {
        storeId:'pointStore',
        fields:['id', 'name', 'pointNumber', 'coordX', 'coordY'],
        data:{'items':[
                { 'id': '1','name': 'p1-415',  "pointNumber":"415",  "coordX":"54.198708",  "coordY":"37.606190" },
                { 'id': '2','name': 'p2-416',  "pointNumber":"422",  "coordX":"54.298708",  "coordY":"37.706190" },
                { 'id': '3','name': 'p3-417',  "pointNumber":"444",  "coordX":"54.398708",  "coordY":"37.806190" },
                { 'id': '4','name': 'p3-418',  "pointNumber":"425",  "coordX":"54.498708",  "coordY":"37.906190" },
            ]},
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
        store: Ext.data.StoreManager.lookup('pointStore'),
        columns: [
            {text: 'Id', dataIndex: 'id', width: 5, flex: 1},
            {text: 'Name', dataIndex: 'name', width: 40, flex: 1},
            {text: 'Number', dataIndex: 'pointNumber', width:4, flex: 1},
            {text: 'Coordinate X', dataIndex: 'coordX'},
            {text: 'Coordinate Y', dataIndex: 'coordY'}
        ],
        height: 200,
        width: 500,
        margin: '10 5 10 5',
        resizable: true,
        renderTo: 'pointsGrid'
    });
});

//#
