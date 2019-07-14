import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0761Component } from './page0761.component';

@NgModule({
  declarations: [Page0761Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0761Component }])],
  exports: [Page0761Component]
})
export class Page0761Module {}
