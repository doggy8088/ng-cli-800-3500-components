import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1013Component } from './page1013.component';

@NgModule({
  declarations: [Page1013Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1013Component }])],
  exports: [Page1013Component]
})
export class Page1013Module {}
