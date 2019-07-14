import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0999Component } from './page0999.component';

@NgModule({
  declarations: [Page0999Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0999Component }])],
  exports: [Page0999Component]
})
export class Page0999Module {}
