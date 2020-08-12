/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797979" });
 });

 // You can also use "$(window).load(function() {"
    $(function () {

 

      // Slideshow 4
      $("#slider4").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });

    });
	
	
	
var map;
var egglabs = new google.maps.LatLng(50.4504996602356, 30.51102876663208);
var mapCoordinates = new google.maps.LatLng(50.4504996602356, 30.51102876663208);


var markers = [];
var image = new google.maps.MarkerImage(
    'images/ico-marker.png',
    new google.maps.Size(101,82),
    new google.maps.Point(0,0),
    new google.maps.Point(42,56)
	
  );

function addMarker() 
{
      markers.push(new google.maps.Marker({
      position: egglabs,
      raiseOnDrag: false,
	  icon: image,
      map: map,
      draggable: false,
	
	  
      }));
      
}

function initialize() {
  var mapOptions = {
	
    zoom: 15,
	disableDefaultUI: false,
    center: mapCoordinates,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false,
	styles: [
    {"featureType": "water","stylers": [{"saturation": 43},{"lightness": -11},{"hue": "#0088ff"
}]},{"featureType": "road","elementType": "geometry.fill","stylers": [{"hue": "#ff0000"
},{ "saturation": -100},{"lightness": 99}]},{"featureType": "road","elementType": "geometry.stroke",
"stylers": [{"color": "#808080"},{"lightness": 54}]},{"featureType": "landscape.man_made","elementType": "geometry.fill","stylers": [{"color": "#ece2d9"}]},{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#ccdca1"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#767676"}]},{"featureType": "road","elementType": "labels.text.stroke","stylers": [{"color": "#ffffff"}]},{"featureType": "poi","stylers": [
{"visibility": "on"}]},{"featureType": "landscape.natural","elementType": "geometry.fill",
 "stylers": [{"visibility": "on"},{"color": "#EBE5E0"}]},{"featureType": "poi.park",
"stylers": [{"visibility": "on"}]},{"featureType": "poi.sports_complex","stylers": [
{ "visibility": "on"}]}]};
map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
addMarker();
}
google.maps.event.addDomListener(window, 'load', initialize);

 $(document).ready(function(){
   $(' #header a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1400);
      e.preventDefault();
   });
   return false;
});



	/*Fancybox*/


            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 320,
        minHeight: 309,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	

/*Fancybox end*/  

	
		
		//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});

 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 800,
		arrows: false,
        fixed: false,
        autoCenter: false,
     
    });

(function($) {
  var cache = [];
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery)
 
jQuery.preLoadImages("images/ico-social-fb-white.png", "images/ico-social-twit-white.png", "images/ico-social-vk-white.png", "images/ico-arrow-nex-whitet.png", "images/ico-arrow-prev-white.png");

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 800,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

$(document).ready(function(){
        var $menu = $(".top-header-bottom");
   $(window).scroll(function(){
            if ( $(this).scrollTop() > 99 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 99 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });