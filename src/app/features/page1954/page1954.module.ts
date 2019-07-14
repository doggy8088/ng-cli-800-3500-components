import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1954Component } from './page1954.component';

@NgModule({
  declarations: [Page1954Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1954Component }])],
  exports: [Page1954Component]
})
export class Page1954Module {}
