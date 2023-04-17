var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_areaofinterest_1 = new ol.format.GeoJSON();
var features_areaofinterest_1 = format_areaofinterest_1.readFeatures(json_areaofinterest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areaofinterest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areaofinterest_1.addFeatures(features_areaofinterest_1);
var lyr_areaofinterest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_areaofinterest_1, 
                style: style_areaofinterest_1,
                interactive: true,
                title: 'area of interest'
            });
var format_TeaselsArea_2 = new ol.format.GeoJSON();
var features_TeaselsArea_2 = format_TeaselsArea_2.readFeatures(json_TeaselsArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TeaselsArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeaselsArea_2.addFeatures(features_TeaselsArea_2);
var lyr_TeaselsArea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TeaselsArea_2, 
                style: style_TeaselsArea_2,
                interactive: true,
                title: '<img src="styles/legend/TeaselsArea_2.png" /> Teasels Area'
            });
var format_wimbledon_3 = new ol.format.GeoJSON();
var features_wimbledon_3 = format_wimbledon_3.readFeatures(json_wimbledon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wimbledon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wimbledon_3.addFeatures(features_wimbledon_3);
var lyr_wimbledon_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wimbledon_3, 
                style: style_wimbledon_3,
                interactive: true,
                title: '<img src="styles/legend/wimbledon_3.png" /> wimbledon'
            });
var format_Path_4 = new ol.format.GeoJSON();
var features_Path_4 = format_Path_4.readFeatures(json_Path_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Path_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Path_4.addFeatures(features_Path_4);
var lyr_Path_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Path_4, 
                style: style_Path_4,
                interactive: true,
                title: '<img src="styles/legend/Path_4.png" /> Path'
            });
var format_warmemorial_5 = new ol.format.GeoJSON();
var features_warmemorial_5 = format_warmemorial_5.readFeatures(json_warmemorial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_warmemorial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_warmemorial_5.addFeatures(features_warmemorial_5);
var lyr_warmemorial_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_warmemorial_5, 
                style: style_warmemorial_5,
                interactive: true,
                title: '<img src="styles/legend/warmemorial_5.png" /> war memorial'
            });
var format_Graves_6 = new ol.format.GeoJSON();
var features_Graves_6 = format_Graves_6.readFeatures(json_Graves_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Graves_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Graves_6.addFeatures(features_Graves_6);
var lyr_Graves_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Graves_6, 
                style: style_Graves_6,
                interactive: true,
                title: '<img src="styles/legend/Graves_6.png" /> Graves'
            });
var format_vassa_7 = new ol.format.GeoJSON();
var features_vassa_7 = format_vassa_7.readFeatures(json_vassa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vassa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vassa_7.addFeatures(features_vassa_7);
var lyr_vassa_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vassa_7, 
                style: style_vassa_7,
                interactive: false,
                title: '<img src="styles/legend/vassa_7.png" /> vassa'
            });
var format_Trees_8 = new ol.format.GeoJSON();
var features_Trees_8 = format_Trees_8.readFeatures(json_Trees_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_8.addFeatures(features_Trees_8);
var lyr_Trees_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_8, 
                style: style_Trees_8,
                interactive: true,
                title: '<img src="styles/legend/Trees_8.png" /> Trees'
            });
var format_ShadedUncutArea_9 = new ol.format.GeoJSON();
var features_ShadedUncutArea_9 = format_ShadedUncutArea_9.readFeatures(json_ShadedUncutArea_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShadedUncutArea_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShadedUncutArea_9.addFeatures(features_ShadedUncutArea_9);
var lyr_ShadedUncutArea_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShadedUncutArea_9, 
                style: style_ShadedUncutArea_9,
                interactive: true,
                title: '<img src="styles/legend/ShadedUncutArea_9.png" /> Shaded Uncut Area'
            });
var format_springmeadow_10 = new ol.format.GeoJSON();
var features_springmeadow_10 = format_springmeadow_10.readFeatures(json_springmeadow_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_springmeadow_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_springmeadow_10.addFeatures(features_springmeadow_10);
var lyr_springmeadow_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_springmeadow_10, 
                style: style_springmeadow_10,
                interactive: true,
                title: '<img src="styles/legend/springmeadow_10.png" /> spring meadow'
            });
var format_mainpath_11 = new ol.format.GeoJSON();
var features_mainpath_11 = format_mainpath_11.readFeatures(json_mainpath_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mainpath_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainpath_11.addFeatures(features_mainpath_11);
var lyr_mainpath_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mainpath_11, 
                style: style_mainpath_11,
                interactive: true,
                title: '<img src="styles/legend/mainpath_11.png" /> main-path'
            });
var format_CompostArea_12 = new ol.format.GeoJSON();
var features_CompostArea_12 = format_CompostArea_12.readFeatures(json_CompostArea_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompostArea_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompostArea_12.addFeatures(features_CompostArea_12);
var lyr_CompostArea_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CompostArea_12, 
                style: style_CompostArea_12,
                interactive: true,
                title: '<img src="styles/legend/CompostArea_12.png" /> Compost Area'
            });
var format_churchstborder_13 = new ol.format.GeoJSON();
var features_churchstborder_13 = format_churchstborder_13.readFeatures(json_churchstborder_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_churchstborder_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_churchstborder_13.addFeatures(features_churchstborder_13);
var lyr_churchstborder_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_churchstborder_13, 
                style: style_churchstborder_13,
                interactive: true,
                title: '<img src="styles/legend/churchstborder_13.png" /> church st border'
            });
var format_summermeadow2023_14 = new ol.format.GeoJSON();
var features_summermeadow2023_14 = format_summermeadow2023_14.readFeatures(json_summermeadow2023_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_summermeadow2023_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_summermeadow2023_14.addFeatures(features_summermeadow2023_14);
var lyr_summermeadow2023_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_summermeadow2023_14, 
                style: style_summermeadow2023_14,
                interactive: true,
                title: '<img src="styles/legend/summermeadow2023_14.png" /> summermeadow2023'
            });

lyr_OSMStandard_0.setVisible(true);lyr_areaofinterest_1.setVisible(true);lyr_TeaselsArea_2.setVisible(true);lyr_wimbledon_3.setVisible(true);lyr_Path_4.setVisible(true);lyr_warmemorial_5.setVisible(true);lyr_Graves_6.setVisible(true);lyr_vassa_7.setVisible(false);lyr_Trees_8.setVisible(true);lyr_ShadedUncutArea_9.setVisible(true);lyr_springmeadow_10.setVisible(true);lyr_mainpath_11.setVisible(true);lyr_CompostArea_12.setVisible(false);lyr_churchstborder_13.setVisible(true);lyr_summermeadow2023_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_areaofinterest_1,lyr_TeaselsArea_2,lyr_wimbledon_3,lyr_Path_4,lyr_warmemorial_5,lyr_Graves_6,lyr_vassa_7,lyr_Trees_8,lyr_ShadedUncutArea_9,lyr_springmeadow_10,lyr_mainpath_11,lyr_CompostArea_12,lyr_churchstborder_13,lyr_summermeadow2023_14];
lyr_areaofinterest_1.set('fieldAliases', {'id': 'id', });
lyr_TeaselsArea_2.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_wimbledon_3.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_Path_4.set('fieldAliases', {'id': 'id', });
lyr_warmemorial_5.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_Graves_6.set('fieldAliases', {'Name': 'Name', });
lyr_vassa_7.set('fieldAliases', {'Name': 'Name', 'hyperlink': 'hyperlink', });
lyr_Trees_8.set('fieldAliases', {'Name': 'Name', });
lyr_ShadedUncutArea_9.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_springmeadow_10.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_mainpath_11.set('fieldAliases', {'Mowing': 'Mowing', 'Name': 'Name', });
lyr_CompostArea_12.set('fieldAliases', {'Name': 'Name', });
lyr_churchstborder_13.set('fieldAliases', {'id': 'id', });
lyr_summermeadow2023_14.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_areaofinterest_1.set('fieldImages', {'id': 'TextEdit', });
lyr_TeaselsArea_2.set('fieldImages', {'Name': 'TextEdit', 'Mowing': '', });
lyr_wimbledon_3.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_Path_4.set('fieldImages', {'id': 'TextEdit', });
lyr_warmemorial_5.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_Graves_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_vassa_7.set('fieldImages', {'Name': '', 'hyperlink': 'TextEdit', });
lyr_Trees_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_ShadedUncutArea_9.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_springmeadow_10.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_mainpath_11.set('fieldImages', {'Mowing': 'TextEdit', 'Name': 'TextEdit', });
lyr_CompostArea_12.set('fieldImages', {'Name': 'TextEdit', });
lyr_churchstborder_13.set('fieldImages', {'id': 'TextEdit', });
lyr_summermeadow2023_14.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_areaofinterest_1.set('fieldLabels', {'id': 'no label', });
lyr_TeaselsArea_2.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_wimbledon_3.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_Path_4.set('fieldLabels', {'id': 'inline label', });
lyr_warmemorial_5.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_Graves_6.set('fieldLabels', {'Name': 'no label', });
lyr_vassa_7.set('fieldLabels', {'Name': 'no label', 'hyperlink': 'no label', });
lyr_Trees_8.set('fieldLabels', {'Name': 'no label', });
lyr_ShadedUncutArea_9.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_springmeadow_10.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_mainpath_11.set('fieldLabels', {'Mowing': 'inline label', 'Name': 'inline label', });
lyr_CompostArea_12.set('fieldLabels', {'Name': 'no label', });
lyr_churchstborder_13.set('fieldLabels', {'id': 'inline label', });
lyr_summermeadow2023_14.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_summermeadow2023_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});