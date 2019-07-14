import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0146Component } from './page0146.component';

@NgModule({
  declarations: [Page0146Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0146Component }])],
  exports: [Page0146Component]
})
export class Page0146Module {}
