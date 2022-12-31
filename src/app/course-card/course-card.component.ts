import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EventType } from '@angular/router';
import { COURSES } from 'src/db-data';
import { Course } from 'src/model/Course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {


  @Input() data !: any;
  @Input() idx !: any;

  @Output('courseCelected') courseEventEmitter = new EventEmitter<Course>();

  @Output() courseCelected1 = new EventEmitter<any>();

  constructor() { }
  ngOnInit(): void {

  }
  courseView() {
    console.log("card component view -button clicked");
    this.courseEventEmitter.emit(this.data);
  }
  isImageEmpty() {
    return this.data == null || this.data.iconUrl == null;
  }
  cardClasses() {
    return {
      'beginner': this.data.category?.toString().toLowerCase() == 'beginner',
      'ADVANCEDz': this.data.category?.toString() == 'ADVANCEDz',
      'ADVANCED': this.data.category?.toString() == 'ADVANCED',
    }
  }
}