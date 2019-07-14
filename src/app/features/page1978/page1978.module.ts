import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1978Component } from './page1978.component';

@NgModule({
  declarations: [Page1978Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1978Component }])],
  exports: [Page1978Component]
})
export class Page1978Module {}
