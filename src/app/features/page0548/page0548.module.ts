import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0548Component } from './page0548.component';

@NgModule({
  declarations: [Page0548Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0548Component }])],
  exports: [Page0548Component]
})
export class Page0548Module {}
