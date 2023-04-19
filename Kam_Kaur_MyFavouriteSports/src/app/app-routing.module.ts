import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentList } from './helper-files/content-list';


const routes: Routes = [
  { path: '', component: ContentList },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
