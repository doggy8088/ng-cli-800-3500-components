import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0373Component } from './page0373.component';

@NgModule({
  declarations: [Page0373Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0373Component }])],
  exports: [Page0373Component]
})
export class Page0373Module {}
