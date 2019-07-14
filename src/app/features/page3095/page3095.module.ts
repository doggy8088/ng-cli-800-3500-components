import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3095Component } from './page3095.component';

@NgModule({
  declarations: [Page3095Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3095Component }])],
  exports: [Page3095Component]
})
export class Page3095Module {}
