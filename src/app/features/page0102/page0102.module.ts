import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0102Component } from './page0102.component';

@NgModule({
  declarations: [Page0102Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0102Component }])],
  exports: [Page0102Component]
})
export class Page0102Module {}
