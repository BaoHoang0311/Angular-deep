import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { __classPrivateFieldGet } from 'tslib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dive';
  
  course = COURSES[0];
  rsjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];
  haha = {cuoi : 5 , khongcuoi : 6 };
  xinchao = {chao :5, khongchao : "khongchao"};
  xinchao2 = 200;
  hoho= 5;
  
  OnCourseSelected(course:any){
    console.log(`App Component - click event bubbled 1`, course);

  }
  OnCourseSelected1(dulieu:any){
    console.log(`App Component - click event bubbled 1`, dulieu);
  }
}
