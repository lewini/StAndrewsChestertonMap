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
var format_TeaselsArea_1 = new ol.format.GeoJSON();
var features_TeaselsArea_1 = format_TeaselsArea_1.readFeatures(json_TeaselsArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TeaselsArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeaselsArea_1.addFeatures(features_TeaselsArea_1);
var lyr_TeaselsArea_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TeaselsArea_1, 
                style: style_TeaselsArea_1,
                interactive: true,
                title: '<img src="styles/legend/TeaselsArea_1.png" /> Teasels Area'
            });
var format_wimbledon_2 = new ol.format.GeoJSON();
var features_wimbledon_2 = format_wimbledon_2.readFeatures(json_wimbledon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wimbledon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wimbledon_2.addFeatures(features_wimbledon_2);
var lyr_wimbledon_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wimbledon_2, 
                style: style_wimbledon_2,
                interactive: true,
                title: '<img src="styles/legend/wimbledon_2.png" /> wimbledon'
            });
var format_Path_3 = new ol.format.GeoJSON();
var features_Path_3 = format_Path_3.readFeatures(json_Path_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Path_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Path_3.addFeatures(features_Path_3);
var lyr_Path_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Path_3, 
                style: style_Path_3,
                interactive: true,
                title: '<img src="styles/legend/Path_3.png" /> Path'
            });
var format_warmemorial_4 = new ol.format.GeoJSON();
var features_warmemorial_4 = format_warmemorial_4.readFeatures(json_warmemorial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_warmemorial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_warmemorial_4.addFeatures(features_warmemorial_4);
var lyr_warmemorial_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_warmemorial_4, 
                style: style_warmemorial_4,
                interactive: true,
                title: '<img src="styles/legend/warmemorial_4.png" /> war memorial'
            });
var format_Graves_5 = new ol.format.GeoJSON();
var features_Graves_5 = format_Graves_5.readFeatures(json_Graves_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Graves_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Graves_5.addFeatures(features_Graves_5);
var lyr_Graves_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Graves_5,
maxResolution:0.7519199161882337,
 
                style: style_Graves_5,
                interactive: true,
                title: '<img src="styles/legend/Graves_5.png" /> Graves'
            });
var format_commonwealthwargraves_6 = new ol.format.GeoJSON();
var features_commonwealthwargraves_6 = format_commonwealthwargraves_6.readFeatures(json_commonwealthwargraves_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commonwealthwargraves_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commonwealthwargraves_6.addFeatures(features_commonwealthwargraves_6);
var lyr_commonwealthwargraves_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_commonwealthwargraves_6,
maxResolution:0.7519199161882337,
 
                style: style_commonwealthwargraves_6,
                interactive: true,
                title: '<img src="styles/legend/commonwealthwargraves_6.png" /> commonwealth war graves'
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
maxResolution:0.7519199161882337,
 
                style: style_vassa_7,
                interactive: true,
                title: '<img src="styles/legend/vassa_7.png" /> vassa'
            });
var format_gravesother_8 = new ol.format.GeoJSON();
var features_gravesother_8 = format_gravesother_8.readFeatures(json_gravesother_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gravesother_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gravesother_8.addFeatures(features_gravesother_8);
var lyr_gravesother_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gravesother_8,
maxResolution:0.7519199161882337,
 
                style: style_gravesother_8,
                interactive: true,
                title: '<img src="styles/legend/gravesother_8.png" /> graves-other'
            });
var format_Trees_9 = new ol.format.GeoJSON();
var features_Trees_9 = format_Trees_9.readFeatures(json_Trees_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_9.addFeatures(features_Trees_9);
var lyr_Trees_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Trees_9,
maxResolution:0.7519199161882337,
 
                style: style_Trees_9,
                interactive: true,
                title: '<img src="styles/legend/Trees_9.png" /> Trees'
            });
var format_ShadedUncutArea_10 = new ol.format.GeoJSON();
var features_ShadedUncutArea_10 = format_ShadedUncutArea_10.readFeatures(json_ShadedUncutArea_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShadedUncutArea_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShadedUncutArea_10.addFeatures(features_ShadedUncutArea_10);
var lyr_ShadedUncutArea_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShadedUncutArea_10, 
                style: style_ShadedUncutArea_10,
                interactive: true,
                title: '<img src="styles/legend/ShadedUncutArea_10.png" /> Shaded Uncut Area'
            });
var format_shed_11 = new ol.format.GeoJSON();
var features_shed_11 = format_shed_11.readFeatures(json_shed_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shed_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shed_11.addFeatures(features_shed_11);
var lyr_shed_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shed_11,
maxResolution:0.7519199161882337,
 
                style: style_shed_11,
                interactive: true,
                title: '<img src="styles/legend/shed_11.png" /> shed'
            });
var format_springmeadow_12 = new ol.format.GeoJSON();
var features_springmeadow_12 = format_springmeadow_12.readFeatures(json_springmeadow_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_springmeadow_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_springmeadow_12.addFeatures(features_springmeadow_12);
var lyr_springmeadow_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_springmeadow_12, 
                style: style_springmeadow_12,
                interactive: true,
                title: '<img src="styles/legend/springmeadow_12.png" /> spring meadow'
            });
var format_mainpath_13 = new ol.format.GeoJSON();
var features_mainpath_13 = format_mainpath_13.readFeatures(json_mainpath_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mainpath_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainpath_13.addFeatures(features_mainpath_13);
var lyr_mainpath_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mainpath_13, 
                style: style_mainpath_13,
                interactive: true,
                title: '<img src="styles/legend/mainpath_13.png" /> main-path'
            });
var format_CompostArea_14 = new ol.format.GeoJSON();
var features_CompostArea_14 = format_CompostArea_14.readFeatures(json_CompostArea_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompostArea_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompostArea_14.addFeatures(features_CompostArea_14);
var lyr_CompostArea_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CompostArea_14, 
                style: style_CompostArea_14,
                interactive: true,
                title: '<img src="styles/legend/CompostArea_14.png" /> Compost Area'
            });
var format_churchstbordercopy_15 = new ol.format.GeoJSON();
var features_churchstbordercopy_15 = format_churchstbordercopy_15.readFeatures(json_churchstbordercopy_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_churchstbordercopy_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_churchstbordercopy_15.addFeatures(features_churchstbordercopy_15);
var lyr_churchstbordercopy_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_churchstbordercopy_15, 
                style: style_churchstbordercopy_15,
                interactive: true,
                title: '<img src="styles/legend/churchstbordercopy_15.png" /> church st border copy'
            });
var format_bicyclerack_16 = new ol.format.GeoJSON();
var features_bicyclerack_16 = format_bicyclerack_16.readFeatures(json_bicyclerack_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bicyclerack_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bicyclerack_16.addFeatures(features_bicyclerack_16);
var lyr_bicyclerack_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bicyclerack_16,
maxResolution:0.7519199161882337,
 
                style: style_bicyclerack_16,
                interactive: true,
                title: '<img src="styles/legend/bicyclerack_16.png" /> bicyclerack'
            });
var format_summermeadow2023_17 = new ol.format.GeoJSON();
var features_summermeadow2023_17 = format_summermeadow2023_17.readFeatures(json_summermeadow2023_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_summermeadow2023_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_summermeadow2023_17.addFeatures(features_summermeadow2023_17);
var lyr_summermeadow2023_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_summermeadow2023_17, 
                style: style_summermeadow2023_17,
                interactive: true,
                title: '<img src="styles/legend/summermeadow2023_17.png" /> summermeadow2023'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TeaselsArea_1.setVisible(true);lyr_wimbledon_2.setVisible(true);lyr_Path_3.setVisible(true);lyr_warmemorial_4.setVisible(true);lyr_Graves_5.setVisible(true);lyr_commonwealthwargraves_6.setVisible(true);lyr_vassa_7.setVisible(false);lyr_gravesother_8.setVisible(true);lyr_Trees_9.setVisible(true);lyr_ShadedUncutArea_10.setVisible(true);lyr_shed_11.setVisible(true);lyr_springmeadow_12.setVisible(true);lyr_mainpath_13.setVisible(true);lyr_CompostArea_14.setVisible(false);lyr_churchstbordercopy_15.setVisible(true);lyr_bicyclerack_16.setVisible(true);lyr_summermeadow2023_17.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TeaselsArea_1,lyr_wimbledon_2,lyr_Path_3,lyr_warmemorial_4,lyr_Graves_5,lyr_commonwealthwargraves_6,lyr_vassa_7,lyr_gravesother_8,lyr_Trees_9,lyr_ShadedUncutArea_10,lyr_shed_11,lyr_springmeadow_12,lyr_mainpath_13,lyr_CompostArea_14,lyr_churchstbordercopy_15,lyr_bicyclerack_16,lyr_summermeadow2023_17];
lyr_TeaselsArea_1.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_wimbledon_2.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_Path_3.set('fieldAliases', {'Name': 'Name', });
lyr_warmemorial_4.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_Graves_5.set('fieldAliases', {'Name': 'Name', });
lyr_commonwealthwargraves_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_vassa_7.set('fieldAliases', {'Name': 'Name', 'hyperlink': 'hyperlink', });
lyr_gravesother_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Trees_9.set('fieldAliases', {'Name': 'Name', });
lyr_ShadedUncutArea_10.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_shed_11.set('fieldAliases', {'Name': 'Name', 'auxiliary_storage_symbol_name_shed': 'auxiliary_storage_symbol_name_shed', });
lyr_springmeadow_12.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_mainpath_13.set('fieldAliases', {'Mowing': 'Mowing', 'Name': 'Name', });
lyr_CompostArea_14.set('fieldAliases', {'Name': 'Name', });
lyr_churchstbordercopy_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Mowing': 'Mowing', });
lyr_bicyclerack_16.set('fieldAliases', {'Name': 'Name', });
lyr_summermeadow2023_17.set('fieldAliases', {'Name': 'Name', 'Mowing': 'Mowing', });
lyr_TeaselsArea_1.set('fieldImages', {'Name': 'TextEdit', 'Mowing': '', });
lyr_wimbledon_2.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_Path_3.set('fieldImages', {'Name': 'Hidden', });
lyr_warmemorial_4.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_Graves_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_commonwealthwargraves_6.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', });
lyr_vassa_7.set('fieldImages', {'Name': 'TextEdit', 'hyperlink': 'TextEdit', });
lyr_gravesother_8.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', });
lyr_Trees_9.set('fieldImages', {'Name': 'TextEdit', });
lyr_ShadedUncutArea_10.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_shed_11.set('fieldImages', {'Name': 'TextEdit', 'auxiliary_storage_symbol_name_shed': 'TextEdit', });
lyr_springmeadow_12.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_mainpath_13.set('fieldImages', {'Mowing': 'TextEdit', 'Name': 'TextEdit', });
lyr_CompostArea_14.set('fieldImages', {'Name': 'TextEdit', });
lyr_churchstbordercopy_15.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_bicyclerack_16.set('fieldImages', {'Name': 'TextEdit', });
lyr_summermeadow2023_17.set('fieldImages', {'Name': 'TextEdit', 'Mowing': 'TextEdit', });
lyr_TeaselsArea_1.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_wimbledon_2.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_Path_3.set('fieldLabels', {});
lyr_warmemorial_4.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_Graves_5.set('fieldLabels', {'Name': 'inline label', });
lyr_commonwealthwargraves_6.set('fieldLabels', {'Name': 'inline label', });
lyr_vassa_7.set('fieldLabels', {'Name': 'inline label', 'hyperlink': 'inline label', });
lyr_gravesother_8.set('fieldLabels', {'Name': 'inline label', });
lyr_Trees_9.set('fieldLabels', {'Name': 'no label', });
lyr_ShadedUncutArea_10.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_shed_11.set('fieldLabels', {'Name': 'no label', 'auxiliary_storage_symbol_name_shed': 'no label', });
lyr_springmeadow_12.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_mainpath_13.set('fieldLabels', {'Mowing': 'inline label', 'Name': 'inline label', });
lyr_CompostArea_14.set('fieldLabels', {'Name': 'no label', });
lyr_churchstbordercopy_15.set('fieldLabels', {'Name': 'no label', 'Mowing': 'no label', });
lyr_bicyclerack_16.set('fieldLabels', {'Name': 'no label', });
lyr_summermeadow2023_17.set('fieldLabels', {'Name': 'inline label', 'Mowing': 'inline label', });
lyr_summermeadow2023_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});