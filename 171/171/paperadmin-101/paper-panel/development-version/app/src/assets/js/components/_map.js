(function() {
    "use strict";
    if ($('.g-map').length) {
        $('.g-map').each(function (index, element) {
            var map_selector = $(this).data('id'),
                mapAddress = $(this).data('address'),
                mapType = $(this).data('maptype'),
                zoomLvl = $(this).data('zoomlvl'),
                mapPin = $(this).data('mapPin');
            
            $(this).attr('id', map_selector);
            mapRender(map_selector, mapAddress, mapType, zoomLvl, mapPin);
        });
    }
    function mapRender(selector, address, type, zoom_lvl, mapPin) {
        // Specify features and elements to define styles.
        var styleArray = [{
            featureType: "all",
            stylers: [{
                saturation: -80
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                hue: "#00ffee"
            }, {
                saturation: 50
            }]
        }, {
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }];
        var map = new google.maps.Map(document.getElementById(selector), {
            mapTypeId: type,
            styles: styleArray,
            scrollwheel: false,
            draggable: false,
            zoom: zoom_lvl,
            mapTypeControl: false,
        });

        var map_pin = "assets/img/basic/pin.png";

        if (mapPin) {
            map_pin = mapPin;
        }

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
                'address': address
            },
            function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map,
                        icon: map_pin
                    });
                    map.setCenter(results[0].geometry.location);
                }
            });
    }
}());