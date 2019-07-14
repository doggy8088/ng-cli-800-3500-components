import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1729Component } from './page1729.component';

@NgModule({
  declarations: [Page1729Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1729Component }])],
  exports: [Page1729Component]
})
export class Page1729Module {}
