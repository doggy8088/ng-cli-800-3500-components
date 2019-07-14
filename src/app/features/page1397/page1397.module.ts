import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1397Component } from './page1397.component';

@NgModule({
  declarations: [Page1397Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1397Component }])],
  exports: [Page1397Component]
})
export class Page1397Module {}
