import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0139Component } from './page0139.component';

@NgModule({
  declarations: [Page0139Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0139Component }])],
  exports: [Page0139Component]
})
export class Page0139Module {}
