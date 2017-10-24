import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit {

  wrong: number;
  stage: string;
  step: string;
  testConfig: any;

  constructor() { }

  ngOnInit() {
    this.wrong = 20;
    this.stage = "Implementation";
    this.step = "Lead Development";
    this.testConfig = [
      {
        label: 'Sprint 1',
        percentage: '35'
      },
      {
        label: 'Sprint 2',
        percentage: '65'
      },
      {
        label: 'Sprint 3',
        percentage: '75'
      }
    ]

  }
}
