import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0423Component } from './page0423.component';

@NgModule({
  declarations: [Page0423Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0423Component }])],
  exports: [Page0423Component]
})
export class Page0423Module {}
