import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0585Component } from './page0585.component';

@NgModule({
  declarations: [Page0585Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0585Component }])],
  exports: [Page0585Component]
})
export class Page0585Module {}
