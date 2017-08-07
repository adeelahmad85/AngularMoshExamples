import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  courseCategories =[
    {id:1, name:"Development"},
    {id:2, name:"Art"}    
  ];

  log(x){
    console.log(x);
  }

  submit(form){
    console.log(form);
  }
}
