import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0275Component } from './page0275.component';

@NgModule({
  declarations: [Page0275Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0275Component }])],
  exports: [Page0275Component]
})
export class Page0275Module {}
