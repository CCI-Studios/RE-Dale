(function($) {
    $(function(){
       

        if($("#block-block-7").length > 0)
        {
            createMap();
        }

    });

    function createMap()
    {
        var location = new google.maps.LatLng(42.985264,-82.388663);
        var mapOptions = {
            zoom: 17,
            center: location,
            draggable: false,
            scrollwheel: false,
        }

        var styles = [
                          {
                            stylers:  [
                                    {
                                        saturation: -100

                                    },
                                    {
                                        gamma: 0
                                    }
                                ]
                          },
                          {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [
                              { lightness: 16 },
                              {color:"#c3c3c3"},
                              { visibility: "simplified" }
                            ]
                          },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "lightness": 20, 
                                         color:"#000000"
                                    }
                                ]
                            },
                          
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#000000"
                                    },
                                    {
                                        "lightness": 0
                                    }
                                ]
                            }
                         
                    ];

          google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(location);
        });
        var image = '/sites/all/themes/redale/images/map-marker.png';
    
        var map = new google.maps.Map($("#block-block-7").get(0),
                        mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title: "Wellington Builders"
        });

       marker.setMap(map,marker);
       map.setOptions({styles: styles});
    }
}(jQuery));