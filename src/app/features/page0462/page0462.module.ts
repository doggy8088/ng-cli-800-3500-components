import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0462Component } from './page0462.component';

@NgModule({
  declarations: [Page0462Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0462Component }])],
  exports: [Page0462Component]
})
export class Page0462Module {}
