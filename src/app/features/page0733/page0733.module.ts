import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0733Component } from './page0733.component';

@NgModule({
  declarations: [Page0733Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0733Component }])],
  exports: [Page0733Component]
})
export class Page0733Module {}
