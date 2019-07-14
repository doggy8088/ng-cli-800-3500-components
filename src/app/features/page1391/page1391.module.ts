import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1391Component } from './page1391.component';

@NgModule({
  declarations: [Page1391Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1391Component }])],
  exports: [Page1391Component]
})
export class Page1391Module {}
