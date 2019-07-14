import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0811Component } from './page0811.component';

@NgModule({
  declarations: [Page0811Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0811Component }])],
  exports: [Page0811Component]
})
export class Page0811Module {}
