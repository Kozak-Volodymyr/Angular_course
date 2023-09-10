import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title:string="List of posts";
messagePost:string="Message";
postParentMessage='postList';
childMessage:string='Child Message';
outputChildMessage:string='Child Component output'

@Input() fromParent:string='';
@Output() messageEvent=new EventEmitter<string>();
  constructor(){}
  ngOnInit(): void {
    
  }
sendMessage(){
 this.messageEvent.emit(this.outputChildMessage);
  
}
}
