import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeMapPostsComponent } from './shared/components/merge-map-posts/merge-map-posts.component';
import { MergeMapProdComponent } from './shared/components/merge-map-prod/merge-map-prod.component';
import { MergeMapUsersComponent } from './shared/components/merge-map-users/merge-map-users.component';

const routes: Routes = [
  {
    path:'home',
    component:MergeMapPostsComponent

  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'products',
    component:MergeMapProdComponent
  },
  {
    path:'users',
    component:MergeMapUsersComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
