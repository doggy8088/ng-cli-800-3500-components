import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0846Component } from './page0846.component';

@NgModule({
  declarations: [Page0846Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0846Component }])],
  exports: [Page0846Component]
})
export class Page0846Module {}
