import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1857Component } from './page1857.component';

@NgModule({
  declarations: [Page1857Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1857Component }])],
  exports: [Page1857Component]
})
export class Page1857Module {}
