import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1929Component } from './page1929.component';

@NgModule({
  declarations: [Page1929Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1929Component }])],
  exports: [Page1929Component]
})
export class Page1929Module {}
