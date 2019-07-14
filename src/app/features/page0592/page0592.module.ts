import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0592Component } from './page0592.component';

@NgModule({
  declarations: [Page0592Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0592Component }])],
  exports: [Page0592Component]
})
export class Page0592Module {}
