import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likesCount') likesCount : number;
  @Input('isActive') isActive : boolean;

  constructor() { 
  }

  ngOnInit() {
  }

  onClicked(){
    
    this.isActive = !this.isActive;
    if (this.isActive == true) {
      this.likesCount +=1;
    } else {
      this.likesCount -=1;
    }
  }
}
