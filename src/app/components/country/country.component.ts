import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {isUndefined} from "util";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries: Country[];
  correctCountry: string;
  correctCapital: string;
  correctIndex: number;
  wrongIndex1: number;
  wrongIndex2: number;
  wrongIndex3: number;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;
  currentResult: string;
  correct: number;
  wrong: number;
  total: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.countries = posts;
      this.correctIndex = Math.floor((Math.random() * this.countries.length));
      this.wrongIndex1 = Math.floor((Math.random() * this.countries.length));
      this.wrongIndex2 = Math.floor((Math.random() * this.countries.length));
      this.wrongIndex3 = Math.floor((Math.random() * this.countries.length));
      this.correctCountry = this.countries[this.correctIndex].name;
      this.correctCapital = this.countries[this.correctIndex].capital;
      this.wrongAnswer1 = this.countries[this.wrongIndex1].capital;
      this.wrongAnswer2 = this.countries[this.wrongIndex2].capital;
      this.wrongAnswer3 = this.countries[this.wrongIndex3].capital;
      this.currentResult;
      this.total = this.countries.length;
    })
  }

  getNextQuestion() {
    this.correctIndex = Math.floor((Math.random() * this.countries.length));
    this.wrongIndex1 = Math.floor((Math.random() * this.countries.length));
    this.wrongIndex2 = Math.floor((Math.random() * this.countries.length));
    this.wrongIndex3 = Math.floor((Math.random() * this.countries.length));
    this.correctCountry = this.countries[this.correctIndex].name;
    this.correctCapital = this.countries[this.correctIndex].capital;
    this.wrongAnswer1 = this.countries[this.wrongIndex1].capital;
    this.wrongAnswer2 = this.countries[this.wrongIndex2].capital;
    this.wrongAnswer3 = this.countries[this.wrongIndex3].capital;
    this.currentResult = null;
  }

  checkAnswer(choice) {
    if (this.correctCapital === choice) {
      this.currentResult = 'CORRECT!';
      this.correct = this.dataService.numberCorrect + 1;
      this.dataService.correct();
    } else {
      this.currentResult = `Wrong :(  The correct answer was... ${this.correctCapital}`;
      this.wrong = this.dataService.numberIncorrect + 1;
      this.dataService.incorrect();
    }
  }
}

interface Country {
  name: string,
  capital: string
}
