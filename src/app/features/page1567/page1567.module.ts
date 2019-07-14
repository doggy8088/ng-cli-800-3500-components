import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1567Component } from './page1567.component';

@NgModule({
  declarations: [Page1567Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1567Component }])],
  exports: [Page1567Component]
})
export class Page1567Module {}
