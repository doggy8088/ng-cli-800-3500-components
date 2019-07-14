import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0326Component } from './page0326.component';

@NgModule({
  declarations: [Page0326Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0326Component }])],
  exports: [Page0326Component]
})
export class Page0326Module {}
