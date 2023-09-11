import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 /*  message:string='Message From Typescript';
  imgUrl:string='https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg'
  bool:boolean=true;
  textValue:string='text value';

  userName:string;
  changeColor(){
    this.bool=!this.bool;
  }
  onKeyup(username){
    console.log(username)
  }
  onKeyup2(){
    console.log(this.userName)
  }

 */
postTitle:string;
postDetails:string;
imageUrl:string;
linkUrl:string;
changeColor:boolean;
changeTitle(){
  console.log(this.postTitle);
  
}
changeBackground(){
  this.changeColor=!this.changeColor
  console.log(this.changeColor)
}
}