import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { FormArray, NgForm, NgModel, Validators } from '@angular/forms';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
form:any
emailRegex:string='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
contactRegex:string='[380][0-9]{9}'
constructor(fb:FormBuilder){
  
  this.form=fb.group({
    fullName:['',[Validators.required,Validators.minLength(5)]],
    email:['',[Validators.required,Validators.pattern(this.emailRegex)]],
    contactDetails:fb.group(
      {
        address:['',[Validators.required]],
      shippingAddress:['',[Validators.required]],
      contactNo:[['',Validators.required,
        Validators.pattern(this.contactRegex)]],
      }
    ),
    skills:fb.array([])
  })
/*   this.form=new FormGroup({
    fullName:new FormControl('',),
    email:new FormControl('',),
    contactDetails:new FormGroup({
      address:new FormControl('',[Validators.required]),
      shippingAddress:new FormControl('',Validators.required),
      contactNo:new FormControl('',[Validators.required,
        Validators.pattern(this.contactRegex)])
    }),
    skills:new FormArray([])
  }) */
}
get fullName(){
  console.log(this.form.get('fullName'))
  return this.form.get('fullName');
}
get Email(){
  return this.form.get('email');
}
get Address(){
  return this.form.get('contactDetails.address');
}
get shippingAddress(){
  return this.form.get('contactDetails.shippingAddress');
}
get contactNo(){
  return this.form.get('contactDetails.contactNo');
}
get Skills(){
  return this.form.get('skills') as FormArray
}
onSubmit(){
  console.log(this.form)
}
addSkills(skills:HTMLInputElement){
  this.Skills.push(new FormControl(skills.value))
  console.log(this.form.value);
  skills.value='';
}
removeSkills(index){
  this.Skills.removeAt(index);
}

}
