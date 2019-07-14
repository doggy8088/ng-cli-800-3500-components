import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1860Component } from './page1860.component';

@NgModule({
  declarations: [Page1860Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1860Component }])],
  exports: [Page1860Component]
})
export class Page1860Module {}
