import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0176Component } from './page0176.component';

@NgModule({
  declarations: [Page0176Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0176Component }])],
  exports: [Page0176Component]
})
export class Page0176Module {}
