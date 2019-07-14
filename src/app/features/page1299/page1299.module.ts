import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1299Component } from './page1299.component';

@NgModule({
  declarations: [Page1299Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1299Component }])],
  exports: [Page1299Component]
})
export class Page1299Module {}
