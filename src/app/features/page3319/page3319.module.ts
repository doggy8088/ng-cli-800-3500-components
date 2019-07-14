import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3319Component } from './page3319.component';

@NgModule({
  declarations: [Page3319Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3319Component }])],
  exports: [Page3319Component]
})
export class Page3319Module {}
