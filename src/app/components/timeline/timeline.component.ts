import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {
  @ViewChild("makeMargin") makeMargin: ElementRef;

  date: Date;
  endDate: any;
  startDate: any;
  testConfig: any;
  beginDay: any;
  endDay: any;
  totalNumberOfMonths: any;
  arrayOfWidths: any;
  cellBrightness: any;

  constructor() { }

  ngOnInit() {
    this.date = new Date;
    this.testConfig = [
      {
        name: 'Stage 1',
        startProject: new Date('9/1/2016'),
        endProject: new Date('10/31/2017'),
        percentage: 30,
        testColor: 'red'
      },
      {
        name: 'Stage 2',
        startProject: new Date('11/1/2017'),
        endProject: new Date('12/31/2017'),
        percentage: 10,
        testColor: 'blue'
      },
      {
        name: 'Stage 3',
        startProject: new Date('1/1/2018'),
        endProject: new Date('5/25/2018'),
        percentage: 40,
        testColor: 'green'
      },
      {
        name: 'Stage 4',
        startProject: new Date('4/26/2018'),
        endProject: new Date('7/28/2018'),
        percentage: 25,
        testColor: 'yellow'
      }
    ];

    this.cellBrightness = 100;
    this.arrayOfWidths = [];

    this.getDateRange();
    this.findStartDate();
    this.findEndDate();
    this.totalNumberOfMonths = this.getNumOfMonths(this.beginDay, this.endDay);
  }

  getDateRange() {
    this.startDate, this.endDate;
    if(this.startDate === undefined){
      this.startDate = new Date();
    }
    if(this.endDate === undefined){
      this.endDate = new Date('1/1/1970');
    }

    /**
     * Looks for the start of the timeline
     */
    this.testConfig.forEach(i => {
      if(i.startProject < this.startDate){
        this.startDate = i.startProject;
      }
    });

    /**
     * Looks for the end of the timeline
     */
    this.testConfig.forEach(i => {
      if(i.endProject > this.endDate){
        this.endDate = i.endProject;
      }
    });
  }

  getNumOfMonths(minDate, maxDate) {
    return (maxDate.getFullYear() - minDate.getFullYear()) * 12 + (maxDate.getMonth() - minDate.getMonth()) + 1;}

  findStartDate() {
    let earliestDate = this.testConfig[0].startProject;
    this.testConfig.forEach(i => {
      if(earliestDate > i.startProject) {
        earliestDate = i.startProject;
      }
    });
    this.beginDay = earliestDate;
  }

  findEndDate() {
    let latestDate = this.testConfig[0].endProject;
    this.testConfig.forEach(i => {
      if(latestDate < i.endProject) {
        latestDate = i.endProject;
      }
    });
    this.endDay = latestDate;
  }

  drawCell(cell) {
    let thisWidth = this.getNumOfMonths(cell.startProject, cell.endProject);
    let percent = (thisWidth / this.totalNumberOfMonths) * 100;
    this.cellBrightness = this.cellBrightness - 20;
    console.log(percent);
    return {
      'width': percent+'%',
      'background-color': 'lightgreen',
      'filter': `brightness(${this.cellBrightness}%)`
    }
  }

}
