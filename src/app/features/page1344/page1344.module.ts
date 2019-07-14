import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1344Component } from './page1344.component';

@NgModule({
  declarations: [Page1344Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1344Component }])],
  exports: [Page1344Component]
})
export class Page1344Module {}
