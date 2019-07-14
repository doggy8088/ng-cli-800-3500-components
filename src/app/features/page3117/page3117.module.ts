import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3117Component } from './page3117.component';

@NgModule({
  declarations: [Page3117Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3117Component }])],
  exports: [Page3117Component]
})
export class Page3117Module {}
