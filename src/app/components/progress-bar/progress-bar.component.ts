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

  constructor() { }

  ngOnInit() {
    this.wrong = 20;
    this.stage = "Implementation";
    this.step = "Lead Development";
  }

  addProgress() {
    this.wrong = this.wrong + 5;
  }
}
