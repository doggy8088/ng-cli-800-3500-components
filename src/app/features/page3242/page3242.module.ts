import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3242Component } from './page3242.component';

@NgModule({
  declarations: [Page3242Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3242Component }])],
  exports: [Page3242Component]
})
export class Page3242Module {}
