import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0347Component } from './page0347.component';

@NgModule({
  declarations: [Page0347Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0347Component }])],
  exports: [Page0347Component]
})
export class Page0347Module {}
