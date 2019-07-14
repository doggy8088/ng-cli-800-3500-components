import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1499Component } from './page1499.component';

@NgModule({
  declarations: [Page1499Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1499Component }])],
  exports: [Page1499Component]
})
export class Page1499Module {}
