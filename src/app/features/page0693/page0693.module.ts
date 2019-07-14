import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0693Component } from './page0693.component';

@NgModule({
  declarations: [Page0693Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0693Component }])],
  exports: [Page0693Component]
})
export class Page0693Module {}
