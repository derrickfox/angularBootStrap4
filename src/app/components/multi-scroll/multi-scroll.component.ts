import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-multi-scroll',
  templateUrl: './multi-scroll.component.html',
  styleUrls: ['./multi-scroll.component.css']
})
export class MultiScrollComponent implements OnInit, AfterViewInit{

  @ViewChild("carouselExampleIndicators") carouselExampleIndicators: ElementRef;

  slidesArray: any;

  constructor() { }

  ngOnInit() {
    this.slidesArray = [
      {
        label: 'Slide One',
        image: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/3-sidesitting.jpg',
        link: 'http://www.google.com'
      },
      {
        label: 'Slide Two',
        image: 'http://media.gettyimages.com/photos/surprised-cat-picture-id561460035',
        link: 'http://www.google.com'
      },
      {
        label: 'Slide Three',
        image: 'http://dogsaholic.com/wp-content/uploads/2015/04/Dumb-face.jpg',
        link: 'http://www.google.com'
      }
    ]
  }

  ngAfterViewInit() {
    console.log(this.carouselExampleIndicators.nativeElement.style.carousel = 'pause');
  }
}
