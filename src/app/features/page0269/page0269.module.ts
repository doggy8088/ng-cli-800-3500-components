import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0269Component } from './page0269.component';

@NgModule({
  declarations: [Page0269Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0269Component }])],
  exports: [Page0269Component]
})
export class Page0269Module {}
