import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0746Component } from './page0746.component';

@NgModule({
  declarations: [Page0746Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0746Component }])],
  exports: [Page0746Component]
})
export class Page0746Module {}
