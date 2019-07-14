import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0136Component } from './page0136.component';

@NgModule({
  declarations: [Page0136Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0136Component }])],
  exports: [Page0136Component]
})
export class Page0136Module {}
