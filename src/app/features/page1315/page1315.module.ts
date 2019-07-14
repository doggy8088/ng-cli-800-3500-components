import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1315Component } from './page1315.component';

@NgModule({
  declarations: [Page1315Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1315Component }])],
  exports: [Page1315Component]
})
export class Page1315Module {}
