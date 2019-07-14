import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1497Component } from './page1497.component';

@NgModule({
  declarations: [Page1497Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1497Component }])],
  exports: [Page1497Component]
})
export class Page1497Module {}
