import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0505Component } from './page0505.component';

@NgModule({
  declarations: [Page0505Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0505Component }])],
  exports: [Page0505Component]
})
export class Page0505Module {}
