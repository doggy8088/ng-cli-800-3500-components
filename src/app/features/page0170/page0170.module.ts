import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0170Component } from './page0170.component';

@NgModule({
  declarations: [Page0170Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0170Component }])],
  exports: [Page0170Component]
})
export class Page0170Module {}
