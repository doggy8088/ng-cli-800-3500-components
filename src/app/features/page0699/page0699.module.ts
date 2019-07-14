import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0699Component } from './page0699.component';

@NgModule({
  declarations: [Page0699Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0699Component }])],
  exports: [Page0699Component]
})
export class Page0699Module {}
