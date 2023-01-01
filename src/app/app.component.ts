import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { __classPrivateFieldGet } from 'tslib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  course = COURSES;
  startDate = new Date(2023,0,1);
  title = COURSES[1].description;
  price = 3213123121.5;
  a = COURSES[0];
  rate = 2131213.349325;
  course1 = COURSES[1];
  
  OnCourseSelected(course:any){
    console.log(`App Component - click event bubbled 1`, course);

  }
}