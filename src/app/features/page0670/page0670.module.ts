import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0670Component } from './page0670.component';

@NgModule({
  declarations: [Page0670Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0670Component }])],
  exports: [Page0670Component]
})
export class Page0670Module {}
