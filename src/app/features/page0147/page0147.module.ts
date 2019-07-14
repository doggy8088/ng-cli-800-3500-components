import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0147Component } from './page0147.component';

@NgModule({
  declarations: [Page0147Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0147Component }])],
  exports: [Page0147Component]
})
export class Page0147Module {}
