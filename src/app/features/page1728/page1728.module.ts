import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1728Component } from './page1728.component';

@NgModule({
  declarations: [Page1728Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1728Component }])],
  exports: [Page1728Component]
})
export class Page1728Module {}
