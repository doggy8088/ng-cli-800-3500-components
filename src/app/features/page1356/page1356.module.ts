import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1356Component } from './page1356.component';

@NgModule({
  declarations: [Page1356Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1356Component }])],
  exports: [Page1356Component]
})
export class Page1356Module {}
