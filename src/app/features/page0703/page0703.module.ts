import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0703Component } from './page0703.component';

@NgModule({
  declarations: [Page0703Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0703Component }])],
  exports: [Page0703Component]
})
export class Page0703Module {}
