import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.css']
})
export class NgbCarouselComponent implements OnInit {
  images: Array<string>=[
    "assets/img/1.jpg",
    "assets/img/2.jpg",
    "assets/img/3.jpg",
  ];
  constructor() { }

  ngOnInit() {
  }

}
