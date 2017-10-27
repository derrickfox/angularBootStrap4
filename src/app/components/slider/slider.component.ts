import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imagesArray: any;

  constructor() { }

  ngOnInit() {
    this.imagesArray = {
      slide1: 'http://pubs.rsc.org/services/images/RSCpubs.ePlatform.Service.FreeContent.ImageService.svc/ImageService/Articleimage/2014/RA/c4ra10209f/c4ra10209f-f8_hi-res.gif',
      slide2: 'http://www.odinity.com/wp-content/uploads/2014/03/Absorption-of-NADH.png',
      slide3: 'https://www.researchgate.net/profile/Eduardo_Jose_Araujo/publication/262710716/figure/fig1/AS:296613676371968@1447729619312/Fig-1-Dispersion-graph-of-soma-and-nucleus-areas-in-NADH-diaphorase-positive-neurons-of.png'
    }
      

  }

}
