import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3272Component } from './page3272.component';

@NgModule({
  declarations: [Page3272Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3272Component }])],
  exports: [Page3272Component]
})
export class Page3272Module {}
