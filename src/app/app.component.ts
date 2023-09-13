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
title:string='Angular Course'
count:number=285645;
dcValue:number=3.8567
price:number=13.234
today:Date=new Date();
postObj:object={
  id:1,
  postTitle:'Post1'
}
postArray:Array<string>=['post1','post2','post3'];
userDetails={
  name:'User 1',
  city:'New York',
  countryCode:'US'
}
text:string='asdfsgdhfgjklkjhfgdsadfghjkiSfdghtdjyuioypi[]poiuryetrewerwetyutiyoupiu'
constructor(){}

}
