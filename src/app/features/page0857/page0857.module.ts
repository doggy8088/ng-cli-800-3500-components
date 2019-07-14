import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0857Component } from './page0857.component';

@NgModule({
  declarations: [Page0857Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0857Component }])],
  exports: [Page0857Component]
})
export class Page0857Module {}
