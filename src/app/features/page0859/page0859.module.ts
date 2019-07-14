import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0859Component } from './page0859.component';

@NgModule({
  declarations: [Page0859Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0859Component }])],
  exports: [Page0859Component]
})
export class Page0859Module {}
