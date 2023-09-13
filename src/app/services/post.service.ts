import {Injectable,Injector} from '@angular/core'
export class PostService{
    postList:Array<any>=[
        {id:1,postTitle:'Post 1'},
        {id:1,postTitle:'Post 1'},
        {id:1,postTitle:'Post 1'},
        {id:1,postTitle:'Post 1'},
    ]
    addPost(data:any){
        this.postList.push(data);
    }
}