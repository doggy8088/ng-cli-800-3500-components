import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0232Component } from './page0232.component';

@NgModule({
  declarations: [Page0232Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0232Component }])],
  exports: [Page0232Component]
})
export class Page0232Module {}
