import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0219Component } from './page0219.component';

@NgModule({
  declarations: [Page0219Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0219Component }])],
  exports: [Page0219Component]
})
export class Page0219Module {}
