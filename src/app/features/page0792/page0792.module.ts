import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0792Component } from './page0792.component';

@NgModule({
  declarations: [Page0792Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0792Component }])],
  exports: [Page0792Component]
})
export class Page0792Module {}
