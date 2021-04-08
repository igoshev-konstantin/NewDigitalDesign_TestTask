Ext.onReady(function () {
Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.window.MessageBox',
    'Ext.window.*',
    'Ext.ux.GMapPanel'
]);

var layout = Ext.create('Ext.panel.Panel', {
    //renderTo: 'layout',
    width: window.innerWidth,
    height: window.innerHeight,
    //title: 'Border Layout', //no title will be blank
    layout: 'border',
    items: [{
        title: 'Message List',
        region: 'south',     // position for region
        xtype: 'panel',
        height: 100,
        split: true,         // enable resizing
        collapsible: true,
        margins: '0 5 5 5',
        collapsed: true
    },tree,{
        //title: 'Map',
        region: 'center',     // center region is required, no width/height specified
        xtype: 'gmappanel',
        mapConfOpts: ['enableScrollWheelZoom','enableDoubleClickZoom','enableDragging'],
        mapControls: ['GSmallMapControl','GMapTypeControl','NonExistantControl'],
        zoomLevel: 2,
        gmapType: 'map'
    }],
    renderTo: Ext.getBody() //get the body and display Layout at there
});
})