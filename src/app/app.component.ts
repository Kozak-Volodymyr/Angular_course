import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
class Post{
  id:number;
  postTitle:string
}
interface User{
  username?:string,
  email?:string,
  details?:string
}
class UserDetails implements User{
  username?: string;
  email?: string;
  details?: string;
  constructor(username,email,details){
    this.username=username
    this.details=details
    this.email=email
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username:string;
  email:string;
  details:string;
/* objArray:Array<Post>=[
   {id:1,postTitle:'Post 1'},
  {id:2,postTitle:'Post 2'},
  {id:3,postTitle:'Post 3'}, 
] */
objArray:Array<UserDetails>=[];
stepForm:string='Nothing';

constructor(){
  /* for(let i=0;i<this.postArray.length;i++){
    console.log(this.postArray[i]);
  } */
}

/* addNew(){
  this.objArray.push({id:6,postTitle:'Post 6'})
}
deleteNew(i){
  this.objArray.splice(i,1);
  console.log(this.objArray)
} */
/* onClick(str){
  this.stepForm=str;
}
isActive:boolean=true;
changeActive(){
  this.isActive=!this.isActive
} */
changeData(){
 this.objArray.push(new UserDetails(this.username,this.email,this.details));
 console.log(this.objArray)
 this.username='';
 this.details='';
 this.email='';
}
deleteItem(id){
  this.objArray=this.objArray.filter((item,index)=>{
    index!=id
  })
}
}