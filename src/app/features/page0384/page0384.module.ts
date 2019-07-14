import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0384Component } from './page0384.component';

@NgModule({
  declarations: [Page0384Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0384Component }])],
  exports: [Page0384Component]
})
export class Page0384Module {}
