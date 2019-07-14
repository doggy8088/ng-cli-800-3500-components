import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1894Component } from './page1894.component';

@NgModule({
  declarations: [Page1894Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1894Component }])],
  exports: [Page1894Component]
})
export class Page1894Module {}
