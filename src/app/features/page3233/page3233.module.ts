import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3233Component } from './page3233.component';

@NgModule({
  declarations: [Page3233Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3233Component }])],
  exports: [Page3233Component]
})
export class Page3233Module {}
