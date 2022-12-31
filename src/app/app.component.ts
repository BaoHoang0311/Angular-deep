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
  
  course = COURSES;
  
  OnCourseSelected(course:any){
    console.log(`App Component - click event bubbled 1`, course);

  }
}