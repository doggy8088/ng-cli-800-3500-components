import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0370Component } from './page0370.component';

@NgModule({
  declarations: [Page0370Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0370Component }])],
  exports: [Page0370Component]
})
export class Page0370Module {}
