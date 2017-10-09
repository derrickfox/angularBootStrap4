import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  postList: string[];
  completed: number;
  numberCorrect: number;
  numberIncorrect: number;
  score: number;
  constructor(public http: Http) {
    console.log('Data service connected...');
    this.postList = ['Canada', 'Finland', 'Japan', 'England'];
    this.completed = 0;
    this.numberIncorrect = 0;
    this.numberCorrect = 0;
  }
  getPosts() {
    return this.http.get('https://restcountries.eu/rest/v2/all')
      .map(res => res.json());
  }
  getPostsList() {
    return this.postList;
  }
  correct() {
    return this.numberCorrect = this.numberCorrect + 1;
  }
  incorrect() {
    return this.numberIncorrect = this.numberIncorrect + 1;
  }
}
