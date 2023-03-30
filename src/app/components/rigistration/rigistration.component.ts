import { Component } from '@angular/core';
import { FormGroup,FormControl,FormArray, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-rigistration',
  templateUrl: './rigistration.component.html',
  styleUrls: ['./rigistration.component.scss']
})
export class RigistrationComponent {
  title!: 'Reactive Forms';
  constructor(){

  }
  registrationform =new FormGroup({
     fristname: new FormControl(''),
     lastname: new FormControl(''),
     email: new FormControl(''),
     password:new FormControl(''),
     confirmpassword :new FormControl(''),
     dateofbirth: new FormControl('')
    
  })
  register(){
    console.log(this.registrationform.controls.fristname.value)
    console.log(this.registrationform.controls.lastname.value)
    console.log(this.registrationform.controls.email.value)
    console.log(this.registrationform.controls.password.value)
    console.log(this.registrationform.controls.confirmpassword.value)
    console.log(this.registrationform.controls.dateofbirth.value)
  }

}

