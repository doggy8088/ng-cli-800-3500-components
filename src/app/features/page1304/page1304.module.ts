import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1304Component } from './page1304.component';

@NgModule({
  declarations: [Page1304Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1304Component }])],
  exports: [Page1304Component]
})
export class Page1304Module {}
