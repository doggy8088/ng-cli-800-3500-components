import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0255Component } from './page0255.component';

@NgModule({
  declarations: [Page0255Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0255Component }])],
  exports: [Page0255Component]
})
export class Page0255Module {}
