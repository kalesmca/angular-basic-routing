import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-mark-statement-app';
  constructor(public route: Router){}
  list2(){
    this.route.navigateByUrl('/show-all/' + 'profile');
    localStorage.setItem('state', JSON.stringify({queryId : 25}));

  }
  list1(){
    this.route.navigateByUrl('/show-all/' + 'address');
    localStorage.setItem('state', JSON.stringify({queryId : 35}));

  }
}
