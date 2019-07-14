import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0962Component } from './page0962.component';

@NgModule({
  declarations: [Page0962Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0962Component }])],
  exports: [Page0962Component]
})
export class Page0962Module {}
