import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3098Component } from './page3098.component';

@NgModule({
  declarations: [Page3098Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3098Component }])],
  exports: [Page3098Component]
})
export class Page3098Module {}
