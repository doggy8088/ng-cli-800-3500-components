import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1646Component } from './page1646.component';

@NgModule({
  declarations: [Page1646Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1646Component }])],
  exports: [Page1646Component]
})
export class Page1646Module {}
