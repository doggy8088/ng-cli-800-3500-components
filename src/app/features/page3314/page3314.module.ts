import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3314Component } from './page3314.component';

@NgModule({
  declarations: [Page3314Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3314Component }])],
  exports: [Page3314Component]
})
export class Page3314Module {}
