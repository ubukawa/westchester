var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_facility_1 = new ol.format.GeoJSON();
var features_facility_1 = format_facility_1.readFeatures(json_facility_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_facility_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_facility_1.addFeatures(features_facility_1);
var lyr_facility_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_facility_1, 
                style: style_facility_1,
                interactive: true,
    title: 'facility<br />\
    <img src="styles/legend/facility_1_0.png" /> park<br />\
    <img src="styles/legend/facility_1_1.png" /> public facility<br />\
    <img src="styles/legend/facility_1_2.png" /> school<br />\
    <img src="styles/legend/facility_1_3.png" /> shop<br />\
    <img src="styles/legend/facility_1_4.png" /> station<br />\
    <img src="styles/legend/facility_1_5.png" /> <br />'
        });
var format_containment_2 = new ol.format.GeoJSON();
var features_containment_2 = format_containment_2.readFeatures(json_containment_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_containment_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_containment_2.addFeatures(features_containment_2);
var lyr_containment_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_containment_2, 
                style: style_containment_2,
                interactive: true,
                title: '<img src="styles/legend/containment_2.png" /> containment'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_facility_1.setVisible(true);lyr_containment_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_facility_1,lyr_containment_2];
lyr_facility_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', });
lyr_containment_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'start_date': 'start_date', 'end_date': 'end_date', });
lyr_facility_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_containment_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'start_date': 'DateTime', 'end_date': 'DateTime', });
lyr_facility_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_containment_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'start_date': 'no label', 'end_date': 'no label', });
lyr_containment_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});