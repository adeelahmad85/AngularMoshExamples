import { ChangePasswordValidators } from './changePassword.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
form = new FormGroup({
    oldPassword: new FormControl('',[
      Validators.required
    ],[
      ChangePasswordValidators.checkServerPassword
    ]),
    newPassword: new FormControl('',[
      Validators.required
    ],[
      
    ]),
    confirmPassword: new FormControl('',[
      Validators.required
    ],[
      
    ]),
  },ChangePasswordValidators.passwordsShouldMatch);

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

}
