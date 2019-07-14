import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0728Component } from './page0728.component';

@NgModule({
  declarations: [Page0728Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0728Component }])],
  exports: [Page0728Component]
})
export class Page0728Module {}
