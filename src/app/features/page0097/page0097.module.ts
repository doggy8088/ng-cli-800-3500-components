import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0097Component } from './page0097.component';

@NgModule({
  declarations: [Page0097Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0097Component }])],
  exports: [Page0097Component]
})
export class Page0097Module {}
