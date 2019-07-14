import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0066Component } from './page0066.component';

@NgModule({
  declarations: [Page0066Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0066Component }])],
  exports: [Page0066Component]
})
export class Page0066Module {}
