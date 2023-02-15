$(document).ready(function() {
      var owl = $("#indoor-owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 2],
          [400, 2],
          [1023, 3],
          [1024, 5],
          [1600, 6]
        ],
        navigation : false,
        pagination : false,
        // autoPlay :true,
        autoPlay : 2000,
        rewindSpeed: true,
      });
    });

    $(document).ready(function() {
      var owl = $("#indoor-owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });


$(document).ready(function() {
      var owl = $("#outdoor-owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 2],
          [400, 2],
          [1023, 3],
          [1024, 5],
          [1600, 6]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#outdoor-owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });


$(document).ready(function() {
      var owl = $("#exteriors-owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 1],
          [767, 1],
          [1023, 2],
          [1024, 2],
          [1600, 3]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#exteriors-owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });


$(document).ready(function() {
      var owl = $("#interiors-owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 1],
          [767, 1],
          [1023, 2],
          [1024, 2],
          [1600, 3]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#interiors-owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });


$(document).ready(function() {
      var owl = $("#amenities-owl-demo");
      owl.owlCarousel({
        itemsCustom : [
          [0, 1],
          [400, 1],
          [767, 1],
          [1023, 2],
          [1024, 2],
          [1600, 3]
        ],
        navigation : false,
        pagination : false,
        autoPlay :true,
      });
    });

    $(document).ready(function() {
      var owl = $("#amenities-owl-demo");
      owl.owlCarousel();
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
    });
