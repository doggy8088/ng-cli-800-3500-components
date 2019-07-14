import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1658Component } from './page1658.component';

@NgModule({
  declarations: [Page1658Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1658Component }])],
  exports: [Page1658Component]
})
export class Page1658Module {}
