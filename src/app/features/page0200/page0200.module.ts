import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0200Component } from './page0200.component';

@NgModule({
  declarations: [Page0200Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0200Component }])],
  exports: [Page0200Component]
})
export class Page0200Module {}
