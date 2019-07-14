import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0261Component } from './page0261.component';

@NgModule({
  declarations: [Page0261Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0261Component }])],
  exports: [Page0261Component]
})
export class Page0261Module {}
