import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0251Component } from './page0251.component';

@NgModule({
  declarations: [Page0251Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0251Component }])],
  exports: [Page0251Component]
})
export class Page0251Module {}
