import { Component, OnInit} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

  date: Date;
  endDate: any;
  startDate: any;
  testConfig: any;
  beginDay: any;
  endDay: any;
  totalNumberOfMonths: any;
  arrayOfWidths: any;
  cellBrightness: any;
  textBrightness: any;
  jsonObjectString: any;
  timeLineWidths: any;
  earliestYear: any;
  latestYear: any;

  constructor() { }

  ngOnInit() {
    this.date = new Date;
    this.testConfig = [
      {
        name: 'Stage 1',
        startProject: new Date('9/1/2016'),
        endProject: new Date('10/31/2017'),
      },
      {
        name: 'Stage 2',
        startProject: new Date('11/1/2017'),
        endProject: new Date('12/31/2017'),
      },
      {
        name: 'Stage 3',
        startProject: new Date('1/1/2018'),
        endProject: new Date('5/25/2018'),
      },
      {
        name: 'Stage 4',
        startProject: new Date('4/26/2018'),
        endProject: new Date('7/28/2018'),
      }
    ];

    this.cellBrightness = 100;
    this.arrayOfWidths = [];

    this.jsonObjectString = JSON.stringify(this.testConfig);
    this.timeLineWidths = [];
    this.getDateRange();
    this.findStartDate();
    this.findEndDate();
    this.totalNumberOfMonths = this.getNumOfMonths(this.beginDay, this.endDay);
    this.drawTimeLine();
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

  drawTimeLine() {
    let totalWidth = this.getNumOfMonths(this.beginDay, this.endDay);
    this.earliestYear = this.startDate.getFullYear();
    this.latestYear = this.endDate.getFullYear();
    let monthsFifth = totalWidth * (1/5);
    let monthsHalf = totalWidth/2;
    let monthsThreeFifths = totalWidth * (3/5);

    this.timeLineWidths.push(0);
    this.timeLineWidths.push(monthsFifth);
    this.timeLineWidths.push(monthsHalf);
    this.timeLineWidths.push(monthsThreeFifths);
    this.timeLineWidths.push(totalWidth);

    return {
      'width': '88%'
    }
  }

  drawCell(cell) {
    let thisWidth = this.getNumOfMonths(cell.startProject, cell.endProject);
    let percent = (thisWidth / this.totalNumberOfMonths) * 100;
    this.cellBrightness = this.cellBrightness - 20;
    return {
      'width': percent+'%',
      'background-color': '#c4ffd8',
      'filter': `brightness(${this.cellBrightness}%)`
    }
  }

}
