Ext.onReady(function () {
//     var cont = new Ext.Window({
    Ext.create('Ext.window.Window', {
        layout: 'fit',
        closeAction: 'hide',
        border: false,
        width: 1162,
        height: 380,
        // renderTo: "map1",
        renderTo: Ext.getBody(),
        title: 'Карта google',
        resizable: false,
        draggable: false,
        closable: false,
        border: false,
        x: 200,
        y: 70,
        //items: {}
        items: {
            xtype: 'gmappanel',
            region: 'center',
            id: 'mygooglemap',
            zoomLevel: 3,
            gmapType: 'map',
            mapConfOpts: ['enableScrollWheelZoom', 'enableDoubleClickZoom', 'enableDragging'],
            mapControls: ['GSmallMapControl', 'GMapTypeControl', 'NonExistantControl'],
            setCenter: {
                // geoCodeAddr: '4 Yawkey Way, Boston, MA, 02215-3409, USA',
                // marker: {title: 'Fenway Park'}
                'lat': 37.4419,
                'lng': -122.1419,
                marker: {title: 'Palo Alto'}
            }
        }

    }).show();
    //*//
    // var map2 = new Ext.ux.GMapPanel({
    //     xtype: 'gmappanel',
    //     region: 'center',
    //     id:  'mygooglemap',
    //     zoomLevel: 3,
    //     gmapType: 'map',
    //     mapConfOpts:['enableScrollWheelZoom','enableDoubleClickZoom','enableDragging'],
    //     mapControls: ['GSmallMapControl','GMapTypeControl','NonExistantControl'],
    //     setCenter: {
    //         'lat': 37.4419,
    //         'lng': -122.1419,
    //         marker:{ title: 'Palo Alto'}
    //     }
    // });
    //*//

    // markers: [{
    //     lat: 42.339641,
    //     lng: -71.094224,
    //     marker: {title: 'Boston Museum of Fine Arts'},
    //     listeners: {
    //         click: function (e) {
    //             Ext.Msg.alert({title: x, text: 'and its art.'});
    //         }
    //     }
    // }, {
    //     lat: 42.339419,
    //     lng: -71.09077,
    //     marker: {title: 'Northeastern University'}
    // }]


    // cont.show();
})