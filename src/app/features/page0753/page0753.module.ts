import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0753Component } from './page0753.component';

@NgModule({
  declarations: [Page0753Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0753Component }])],
  exports: [Page0753Component]
})
export class Page0753Module {}
