import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3282Component } from './page3282.component';

@NgModule({
  declarations: [Page3282Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3282Component }])],
  exports: [Page3282Component]
})
export class Page3282Module {}
