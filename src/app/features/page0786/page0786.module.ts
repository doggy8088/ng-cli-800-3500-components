import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0786Component } from './page0786.component';

@NgModule({
  declarations: [Page0786Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0786Component }])],
  exports: [Page0786Component]
})
export class Page0786Module {}
