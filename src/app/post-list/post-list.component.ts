import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
 
})
export class PostListComponent implements OnInit {
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
   this.route.queryParamMap.subscribe(value=>{
    const page=value.get('page');
    const order=value.get('order');
    console.log(page,order);
    

    
   })
  }
  posts=[{
    id:1,
    title:"Title 1",
    content:'Loremegerf'

  },{
    id:2,
    title:"Title 2",
    content:'Lorzsdfxgvhbpl[opjhiougiycx' 
  }]
  
}
