import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1709Component } from './page1709.component';

@NgModule({
  declarations: [Page1709Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1709Component }])],
  exports: [Page1709Component]
})
export class Page1709Module {}
