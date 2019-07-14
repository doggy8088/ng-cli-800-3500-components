import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0331Component } from './page0331.component';

@NgModule({
  declarations: [Page0331Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0331Component }])],
  exports: [Page0331Component]
})
export class Page0331Module {}
