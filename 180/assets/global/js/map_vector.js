/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    /*---- World map -----*/
    $('#world-map').vectorMap({
        map: 'world_en',
        color: '#ffffff',
        hoverOpacity: 0.7,
        backgroundColor: '#eceff4',
        selectedColor: '#4390ff',
        borderOpacity: 0.25,
        borderColor:'#fff',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: ['#C8EEFF', '#4390ff'],
        normalizeFunction: 'polynomial'
    });

    /*---- USA map ----*/
    jQuery('#usa-map').vectorMap({
        map: 'usa_en',
        color: '#4390ff',
        enableZoom: true,
        showTooltip: true,
        hoverColor: '#3263ab',
        backgroundColor: '#eceff4',
        selectedColor: '#4390ff',
        colors: {
            mo: '#3263ab',
            fl: '#3263ab',
            or: '#3263ab'
        },
        onRegionClick: function(event, code, region){
            event.preventDefault();
        }
    });

    /*---- algeria map ----*/
    jQuery('#algeria-map').vectorMap({
        map: 'dz_fr',
        enableZoom: true,
        showTooltip: true,
        color: '#4390ff',
        hoverColor: '#3263ab',
        borderColor:'#fff',
        backgroundColor: '#eceff4'
    });

    /*---- brazil map ----*/
    jQuery('#brazil-map').vectorMap({
        map: 'brazil_br',
        enableZoom: true,
        showTooltip: true,
        color: '#4390ff',
        hoverColor: '#3263ab',
        borderColor:'#fff',
        backgroundColor: '#eceff4'
    });

    /*---- france map ----*/
    jQuery('#france-map').vectorMap({
        map: 'france_fr',
        enableZoom: true,
        showTooltip: true,
        color: '#4390ff',
        hoverColor: '#3263ab',
        borderColor:'#fff',
        backgroundColor: '#eceff4'
    });

    /*---- germany map ----*/
    jQuery('#germany-map').vectorMap({
        map: 'germany_en',
        enableZoom: true,
        showTooltip: true,
        color: '#4390ff',
        hoverColor: '#3263ab',
        borderColor:'#fff',
        backgroundColor: '#eceff4'
    });

    /*---- canada map ----*/
    jQuery('#canada-map').vectorMap({
        map: 'canada_en',
        enableZoom: true,
        showTooltip: true,
        color: '#4390ff',
        hoverColor: '#3263ab',
        borderColor:'#fff',
        backgroundColor: '#eceff4'
    });

    /*---- russia map ----*/
    jQuery('#russia-map').vectorMap({
        map: 'russia_en',
        enableZoom: true,
        showTooltip: true,
        color: '#4390ff',
        hoverColor: '#3263ab',
        borderColor:'#fff',
        backgroundColor: '#eceff4'
    });

    /*---- turkey map ----*/
    jQuery('#turkey-map').vectorMap({
        map: 'turkey',
        enableZoom: true,
        showTooltip: true,
        color: '#4390ff',
        hoverColor: '#3263ab',
        borderColor:'#fff',
        backgroundColor: '#eceff4'
    });


})(jQuery);