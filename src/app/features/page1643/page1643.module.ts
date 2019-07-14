import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1643Component } from './page1643.component';

@NgModule({
  declarations: [Page1643Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1643Component }])],
  exports: [Page1643Component]
})
export class Page1643Module {}
