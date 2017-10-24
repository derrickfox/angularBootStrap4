import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-multi-scroll',
  templateUrl: './multi-scroll.component.html',
  styleUrls: ['./multi-scroll.component.css']
})
export class MultiScrollComponent implements OnInit, AfterViewInit{

  @ViewChild("carouselExampleIndicators") carouselExampleIndicators: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.carouselExampleIndicators.nativeElement.style.carousel = 'pause');
  }
}
