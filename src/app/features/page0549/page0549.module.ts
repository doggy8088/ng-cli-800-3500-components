import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0549Component } from './page0549.component';

@NgModule({
  declarations: [Page0549Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0549Component }])],
  exports: [Page0549Component]
})
export class Page0549Module {}
