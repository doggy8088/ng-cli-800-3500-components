import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0750Component } from './page0750.component';

@NgModule({
  declarations: [Page0750Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0750Component }])],
  exports: [Page0750Component]
})
export class Page0750Module {}
