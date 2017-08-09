import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    this.Topics.push(new FormControl(topic.value));
    topic.value ="";
  }

  removeTopic(topic: FormControl){
    let topicIndex = this.Topics.controls.indexOf(topic);
    this.Topics.removeAt(topicIndex);
  }
  
  public get Topics() : FormArray {
    return this.form.get('topics') as FormArray;
  }
  
}
