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
        image: 'http://pubs.rsc.org/services/images/RSCpubs.ePlatform.Service.FreeContent.ImageService.svc/ImageService/Articleimage/2014/RA/c4ra10209f/c4ra10209f-f8_hi-res.gif',
        link: 'http://www.google.com'
      },
      {
        label: 'Slide Two',
        image: 'http://www.odinity.com/wp-content/uploads/2014/03/Absorption-of-NADH.png',
        link: 'http://www.google.com'
      },
      {
        label: 'Slide Three',
        image: 'https://www.researchgate.net/profile/Eduardo_Jose_Araujo/publication/262710716/figure/fig1/AS:296613676371968@1447729619312/Fig-1-Dispersion-graph-of-soma-and-nucleus-areas-in-NADH-diaphorase-positive-neurons-of.png',
        link: 'http://www.google.com'
      }
    ]
  }

  ngAfterViewInit() {
    console.log(this.carouselExampleIndicators.nativeElement.style.carousel = 'pause');
  }
}