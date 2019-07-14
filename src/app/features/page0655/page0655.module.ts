import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0655Component } from './page0655.component';

@NgModule({
  declarations: [Page0655Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0655Component }])],
  exports: [Page0655Component]
})
export class Page0655Module {}
