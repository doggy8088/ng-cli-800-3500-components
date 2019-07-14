import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0344Component } from './page0344.component';

@NgModule({
  declarations: [Page0344Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0344Component }])],
  exports: [Page0344Component]
})
export class Page0344Module {}
