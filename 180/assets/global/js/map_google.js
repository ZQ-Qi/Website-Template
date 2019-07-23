/*!
 * Prince - v1.0.0
 * @author AtriTheme
 * Copyright (c) 2018
 */
!(function ($) {
    "use strict";

    function initialize() {
    /*---- Basic-map ----*/
    var basic = new GMaps({
        el: '#map-basic',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false
    });


    /*---- Markets-map ----*/
    var markers = new GMaps({
        el: '#map-markers',
        lat: -12.043333,
        lng: -77.028333
    });
    markers.addMarker({
        lat: -12.043333,
        lng: -77.03,
        title: 'Lima',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
        click: function (e) {
            if (console.log)
                console.log(e);
            alert('You clicked in this marker');
        },
        mouseover: function (e) {
            if (console.log)
                console.log(e);
        }
    });
    markers.addMarker({
        lat: -12.042,
        lng: -77.028333,
        title: 'Marker with InfoWindow',
        infoWindow: {
            content: '<p>HTML Content</p>'
        }
    });

    /*---- Geocoding Search ----*/
    var geocoding = new GMaps({
        el: '#map-geocoding',
        lat: -12.043333,
        lng: -77.028333
    });
    $('#geocoding_form').submit(function (e) {
        e.preventDefault();
        GMaps.geocode({
            address: $('#address').val().trim(),
            callback: function (results, status) {
                if (status == 'OK') {
                    var latlng = results[0].geometry.location;
                    geocoding.setCenter(latlng.lat(), latlng.lng());
                    geocoding.addMarker({
                        lat: latlng.lat(),
                        lng: latlng.lng()
                    });
                }
            }
        });
    });

    /*---- Overlays Map ----*/
    var overlays = new GMaps({
        div: '#map-overlays',
        lat: -12.043333,
        lng: -77.028333
    });
    overlays.drawOverlay({
        lat: overlays.getCenter().lat(),
        lng: overlays.getCenter().lng(),
        content: '<div class="overlay">Prince<div class="overlay_arrow above"></div></div>',
        verticalAlign: 'top',
        horizontalAlign: 'center'
    });

    /*---- KML layers ----*/
    var map, infoWindow;
    infoWindow = new google.maps.InfoWindow({});
    var kmllayers = new GMaps({
        div: '#map-kml',
        zoom: 12,
        lat: 40.65,
        lng: -73.95
    });
    kmllayers.loadFromKML({
        url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss',
        suppressInfoWindows: true,
        events: {
            click: function (point) {
                infoWindow.setContent(point.featureData.infoWindowHtml);
                infoWindow.setPosition(point.latLng);
                infoWindow.open(kmllayers.map);
            }
        }
    });

    /*---- Fusion Tables layers ----*/
    infoWindow = new google.maps.InfoWindow({});
    var fusion = new GMaps({
        div: '#map-fusion',
        zoom: 11,
        lat: 41.850033,
        lng: -87.6500523
    });
    fusion.loadFromFusionTables({
        query: {
            select: '\'Geocodable address\'',
            from: '1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg'
        },
        suppressInfoWindows: true,
        events: {
            click: function (point) {
                infoWindow.setContent('You clicked here!');
                infoWindow.setPosition(point.latLng);
                infoWindow.open(fusion.map);
            }
        }
    });

    /*---- Map Types ----*/
    var types = new GMaps({
        div: '#map-types',
        lat: -12.043333,
        lng: -77.028333,
        mapTypeControlOptions: {
            mapTypeIds: ["hybrid", "roadmap", "satellite", "terrain", "osm"]
        }
    });
    types.addMapType("osm", {
        getTileUrl: function (coord, zoom) {
            return "https://a.tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        name: "OpenStreetMap",
        maxZoom: 18
    });
    types.setMapTypeId("osm");

    /*---- Street View Panoramas ----*/
   var panorama = GMaps.createPanorama({
        el: '#map-panorama',
        lat: 42.3455,
        lng: -71.0983
    });
}

    /*---- resize ----*/
    $(window).on('resizeEnd', function () {
        initialize();
    });

    $(window).on('load', function () {
        initialize();
    });

    $(window).resize(function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 500);
    });

})(jQuery);