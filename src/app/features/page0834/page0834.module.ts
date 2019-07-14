import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0834Component } from './page0834.component';

@NgModule({
  declarations: [Page0834Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0834Component }])],
  exports: [Page0834Component]
})
export class Page0834Module {}
