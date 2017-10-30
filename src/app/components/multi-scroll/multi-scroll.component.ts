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
      },
      {
        label: 'Slide Four',
        image: 'http://s.newsweek.com/sites/www.newsweek.com/files/styles/embed-lg/public/2017/08/11/crispr-graph.jpg',
        link: 'http://www.google.com',
      },
      {
        label: 'Slide Five',
        image: 'https://image.slidesharecdn.com/webinarturkrnpoptimization051616-160518134904/95/altr-crisprcas9-system-ribonucleoprotein-delivery-optimization-for-improved-genome-editing-5-638.jpg?cb=1463579368',
        link: 'http://www.google.com'
      },
      {
        label: 'Slide Six',
        image: 'http://bio.biologists.org/content/biolopen/5/6/866/F1.large.jpg',
        link: 'http://www.google.com'
      },
      {
        label: 'Slide Seven',
        image: 'https://images.nature.com/full/nature-assets/nmeth/journal/v12/n10/images/nmeth.3543-SF5.jpg',
        link: 'http://www.google.com'
      },
      {
        label: 'Slide Eight',
        image: 'https://d2j7maqgsavdlx.cloudfront.net/content/jcb/214/2/143/F2.large.jpg',
        link: 'http://www.google.com'
      }
    ]
  }

  ngAfterViewInit() {
    console.log(this.carouselExampleIndicators.nativeElement.style.carousel = 'pause');
  }
}