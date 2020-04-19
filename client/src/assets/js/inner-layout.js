$(function(){

     


      $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {return;}    
        e.preventDefault();    
        var postop = $(id).offset().top - 100; 
        $('.tabs-listing a').each(function () {
            $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');   
        $('body, html').animate({scrollTop: postop}); 
    });


     var headerht = $("header").outerHeight();
      if($(".tabs-listing").length>0)
       var crttopban = $(".tabs-listing").offset().top;                        
      var rsviewlist = crttopban - headerht;      
     // console.log(headerht, crttopban);      
      $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        if(cur_pos > rsviewlist){
        $(".tabs-listing").addClass("fixed-wrap");    
        } else{        
          $(".tabs-listing").removeClass("fixed-wrap");
        }         
      }); 

    //------------ bootstrap accrodian js---------
      function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-remove');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

      //--------- owl carousal js----- for signup---
      $('.owl-carousel').owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        items:3,
        touchDrag : true,
        mouseDrag : true,
        nav: false,
        //navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
            },            
            768:{
                items:1,
            },
            991:{
                items:3,
            },
            1024:{
                items:3,
            }            
          }
      });

  });