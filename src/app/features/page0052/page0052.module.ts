import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0052Component } from './page0052.component';

@NgModule({
  declarations: [Page0052Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0052Component }])],
  exports: [Page0052Component]
})
export class Page0052Module {}
