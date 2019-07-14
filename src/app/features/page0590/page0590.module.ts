import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0590Component } from './page0590.component';

@NgModule({
  declarations: [Page0590Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0590Component }])],
  exports: [Page0590Component]
})
export class Page0590Module {}
