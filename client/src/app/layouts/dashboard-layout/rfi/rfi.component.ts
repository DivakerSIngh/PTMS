import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rfi',
  templateUrl: './rfi.component.html',
  styleUrls: ['./rfi.component.css']
})
export class RfiComponent implements OnInit {
  customOptionsRFI: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
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
  constructor() { }

  ngOnInit(): void {
  }

}
