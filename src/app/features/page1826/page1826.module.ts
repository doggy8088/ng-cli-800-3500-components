import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1826Component } from './page1826.component';

@NgModule({
  declarations: [Page1826Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1826Component }])],
  exports: [Page1826Component]
})
export class Page1826Module {}
