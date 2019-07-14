import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0757Component } from './page0757.component';

@NgModule({
  declarations: [Page0757Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0757Component }])],
  exports: [Page0757Component]
})
export class Page0757Module {}
