import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements AfterViewInit{
  message:string | undefined='';
  title = 'angular';
  parentMessage:string='Parent Message change'
  fromChild:string;
  @ViewChild(PostComponent) childComp:PostComponent;
  constructor(){
  }
  ngAfterViewInit(): void {
    //console.log(this.childComp.title)
   this.message=this.childComp.childMessage;
  }
  receiveMessage($event){
    this.fromChild=$event

  }

}
