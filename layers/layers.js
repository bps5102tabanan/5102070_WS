var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Penebel070_0610hasil_fixed__fixed_geometries_1 = new ol.format.GeoJSON();
var features_Penebel070_0610hasil_fixed__fixed_geometries_1 = format_Penebel070_0610hasil_fixed__fixed_geometries_1.readFeatures(json_Penebel070_0610hasil_fixed__fixed_geometries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penebel070_0610hasil_fixed__fixed_geometries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penebel070_0610hasil_fixed__fixed_geometries_1.addFeatures(features_Penebel070_0610hasil_fixed__fixed_geometries_1);
var lyr_Penebel070_0610hasil_fixed__fixed_geometries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penebel070_0610hasil_fixed__fixed_geometries_1, 
                style: style_Penebel070_0610hasil_fixed__fixed_geometries_1,
                popuplayertitle: 'Penebel - 070_0610 — hasil_fixed__fixed_geometries',
                interactive: false,
                title: '<img src="styles/legend/Penebel070_0610hasil_fixed__fixed_geometries_1.png" /> Penebel - 070_0610 — hasil_fixed__fixed_geometries'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Penebel070_0610hasil_fixed__fixed_geometries_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Penebel070_0610hasil_fixed__fixed_geometries_1];
lyr_Penebel070_0610hasil_fixed__fixed_geometries_1.set('fieldAliases', {'new_id': 'new_id', 'fid': 'fid', 'kk': 'kk', 'gid': 'gid', 'bstt': 'bstt', 'luas': 'luas', 'bsbtt': 'bsbtt', 'idsls': 'idsls', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdsls': 'kdsls', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmsls': 'nmsls', 'bstt_k': 'bstt_k', 'kddesa': 'kddesa', 'kdprov': 'kdprov', 'khusus': 'khusus', 'muatan': 'muatan', 'nmdesa': 'nmdesa', 'nmprov': 'nmprov', 'posisi': 'posisi', 'rw_dki': 'rw_dki', 'segmen': 'segmen', 'subsls': 'subsls', 'sumber': 'sumber', 'dom_sls': 'dom_sls', 'periode': 'periode', 'tingkat': 'tingkat', 'idsubsls': 'idsubsls', 'nm_gedung': 'nm_gedung', 'wil_campur': 'wil_campur', });
lyr_Penebel070_0610hasil_fixed__fixed_geometries_1.set('fieldImages', {'new_id': 'TextEdit', 'fid': 'TextEdit', 'kk': 'TextEdit', 'gid': 'Range', 'bstt': 'TextEdit', 'luas': 'TextEdit', 'bsbtt': 'TextEdit', 'idsls': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdsls': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmsls': 'TextEdit', 'bstt_k': 'TextEdit', 'kddesa': 'TextEdit', 'kdprov': 'TextEdit', 'khusus': 'TextEdit', 'muatan': 'TextEdit', 'nmdesa': 'TextEdit', 'nmprov': 'TextEdit', 'posisi': 'TextEdit', 'rw_dki': 'TextEdit', 'segmen': 'TextEdit', 'subsls': 'TextEdit', 'sumber': 'TextEdit', 'dom_sls': 'TextEdit', 'periode': 'TextEdit', 'tingkat': 'TextEdit', 'idsubsls': 'TextEdit', 'nm_gedung': 'TextEdit', 'wil_campur': 'TextEdit', });
lyr_Penebel070_0610hasil_fixed__fixed_geometries_1.set('fieldLabels', {'new_id': 'no label', 'fid': 'no label', 'kk': 'no label', 'gid': 'no label', 'bstt': 'no label', 'luas': 'no label', 'bsbtt': 'no label', 'idsls': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdsls': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmsls': 'no label', 'bstt_k': 'no label', 'kddesa': 'no label', 'kdprov': 'no label', 'khusus': 'no label', 'muatan': 'no label', 'nmdesa': 'no label', 'nmprov': 'no label', 'posisi': 'no label', 'rw_dki': 'no label', 'segmen': 'no label', 'subsls': 'no label', 'sumber': 'no label', 'dom_sls': 'no label', 'periode': 'no label', 'tingkat': 'no label', 'idsubsls': 'no label', 'nm_gedung': 'no label', 'wil_campur': 'no label', });
lyr_Penebel070_0610hasil_fixed__fixed_geometries_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});