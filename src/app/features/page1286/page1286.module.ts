import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1286Component } from './page1286.component';

@NgModule({
  declarations: [Page1286Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1286Component }])],
  exports: [Page1286Component]
})
export class Page1286Module {}
