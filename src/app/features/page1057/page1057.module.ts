import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1057Component } from './page1057.component';

@NgModule({
  declarations: [Page1057Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1057Component }])],
  exports: [Page1057Component]
})
export class Page1057Module {}
