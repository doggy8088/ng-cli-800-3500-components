import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0697Component } from './page0697.component';

@NgModule({
  declarations: [Page0697Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0697Component }])],
  exports: [Page0697Component]
})
export class Page0697Module {}
