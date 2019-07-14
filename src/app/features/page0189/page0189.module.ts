import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0189Component } from './page0189.component';

@NgModule({
  declarations: [Page0189Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0189Component }])],
  exports: [Page0189Component]
})
export class Page0189Module {}
