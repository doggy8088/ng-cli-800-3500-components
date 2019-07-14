import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0452Component } from './page0452.component';

@NgModule({
  declarations: [Page0452Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0452Component }])],
  exports: [Page0452Component]
})
export class Page0452Module {}
