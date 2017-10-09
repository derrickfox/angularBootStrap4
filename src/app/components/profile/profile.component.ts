import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log('constructor ran..');

  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Carmen San Diego';
    this.email = 'traveler@world.org';
    this.age = 30;
    this.address = {
      street: 'Sleepy Hollow Road',
      city: 'Montague',
      state: 'NJ'
    };
    this.hobbies = ['Canada', 'Finland', 'Japan'];
    this.hello = 'hello';
    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}


interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  name: string,
  body: string,
  userId: number
}
