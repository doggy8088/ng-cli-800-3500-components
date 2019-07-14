import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1563Component } from './page1563.component';

@NgModule({
  declarations: [Page1563Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1563Component }])],
  exports: [Page1563Component]
})
export class Page1563Module {}
