$( document ).ready(function() {
    jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#121212',
        borderColor: '#2A2A2A',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#070707',
        enableZoom: true,
        hoverColor: '#000',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegion: null,
        showTooltip: true,
        onRegionClick: function(element, code, region) {
            var message = 'You clicked "'
            + region 
            + '" which has the code: '
            + code.toUpperCase();
            
            alert(message);
        },
        markers: [
            {latLng: [41.90, 12.45], name: 'Vatican City'},
            {latLng: [43.73, 7.41], name: 'Monaco'},
            {latLng: [-0.52, 166.93], name: 'Nauru'},
            {latLng: [-8.51, 179.21], name: 'Tuvalu'}
        ]

    });
});