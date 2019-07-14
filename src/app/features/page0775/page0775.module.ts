import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0775Component } from './page0775.component';

@NgModule({
  declarations: [Page0775Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0775Component }])],
  exports: [Page0775Component]
})
export class Page0775Module {}
