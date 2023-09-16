import { Component,ViewChild,AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    const obsTest$=new Observable(observer=>{
      
      observer.next('Return From Observable')
      observer.next('This')
      setTimeout(()=>{
        observer.next('Is')
      },2000)
      
      observer.next('Next')

    }).subscribe(value=>{

      console.log(value);
      
    });
    obsTest$.unsubscribe();

    const obsTest=function(){
      return 'Printed From Function'
    }
    const returnData=obsTest();
    console.log(returnData);
    
  }
  onSubmit(){
    //this.router.navigate(['/posts'])
    /* this.router.navigate(['/post',1,'postTitle']) */
    this.router.navigate(['/posts'],{queryParams:{page:1,order:'newest'}})
  }

}