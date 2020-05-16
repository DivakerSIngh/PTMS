import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  customOptionsHome: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 300,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  
  }



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true

}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  resizeSliderHome() {
    if($('#slide-home')) {
        var parentWidth = $('.slide-cn').innerWidth(),
          imgWidth = $('.item-inner').width(),
          imgHeight = $('.item-inner').height(),
          scale = parentWidth/imgWidth,
          ratio = imgWidth/imgHeight,
          heightItem ='520px';// parentWidth/ratio;

      $('.slide-item').css({'height': heightItem});

      if ($(window).width() <= 1200) {

        $('.item-inner').css({
          '-webkit-transform': 'scale(' + scale + ')',
          '-moz-transform': 'scale(' + scale + ')',
          '-ms-transform': 'scale(' + scale + ')',
          'transform': 'scale(' + scale + ')'
        });

      } else {

        $('.item-inner').css({
            '-webkit-transform': 'scale(1)',
            '-moz-transform': 'scale(1)',
            '-ms-transform': 'scale(1)',
            'transform': 'scale(1)'
        });

      }
  }
}
ngAfterViewInit(){

  this.resizeSliderHome();
}

goto(){
this.router.navigate(['elearn/course/courselist']);
}

}