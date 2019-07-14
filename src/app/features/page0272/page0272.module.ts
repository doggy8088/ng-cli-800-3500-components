import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0272Component } from './page0272.component';

@NgModule({
  declarations: [Page0272Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0272Component }])],
  exports: [Page0272Component]
})
export class Page0272Module {}
