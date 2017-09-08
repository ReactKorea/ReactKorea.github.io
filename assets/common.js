(function(){
    // 
    window.addEventListener('scroll', function(){
        var topHeader = document.querySelector('.top-header');
        var nav = document.querySelector('.nav');
        if ( !topHeader ) return;

        var className = nav.className.replace(/\b(is-fixed|animate)\b/g, '').trim();
        if(document.body.scrollTop > topHeader.offsetHeight - 50) {
            nav.className = className + ' is-fixed';
        } else if ( topHeader.className != className ) {
            nav.className = className;
        }
    });

    // Draw the map
    var location = new naver.maps.LatLng(37.499794, 127.0348275);
    var mapObj = new naver.maps.Map('map', {
        center: location,
        zoomControl: true,
        scrollWheel: false,
        zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT
        }
    });
    var marker = new naver.maps.Marker({
        position: location,
        map: mapObj,
        animation: naver.maps.Animation.BOUNCE
    });
})();