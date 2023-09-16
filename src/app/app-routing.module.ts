import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
  path:'posts',component:PostListComponent
},
{path:'',component:HomeComponent},
{path:'post/:id/:title',component:SinglePostComponent},
{path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
