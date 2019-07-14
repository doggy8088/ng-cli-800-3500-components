import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0174Component } from './page0174.component';

@NgModule({
  declarations: [Page0174Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0174Component }])],
  exports: [Page0174Component]
})
export class Page0174Module {}
