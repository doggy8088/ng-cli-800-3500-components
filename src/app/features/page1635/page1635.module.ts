import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1635Component } from './page1635.component';

@NgModule({
  declarations: [Page1635Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1635Component }])],
  exports: [Page1635Component]
})
export class Page1635Module {}
