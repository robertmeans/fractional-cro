     function initialize() {
    var map_canvas = document.getElementById('map');
    var map_options = {

      // 1. Pull desired address up in Google maps
      // 2. Top left click menu (hamburger icon)
      // 3. Select "Share or embed map" > Share link and paste URL into anchor tag on index.php
      // 4. Zoom into location as far as you can
      // 5. put top of pointer at bottom of map pin, right click, "What's here?"
      // 6. grab coordinates and plug them into 2 places below

        center: new google.maps.LatLng(41.890113, 12.494148),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(map_canvas, map_options);
    var i=new google.maps.Marker({
        position:new google.maps.LatLng(41.890113, 12.494148),
        map:map
        })
  }
  google.maps.event.addDomListener(window, 'load', initialize);