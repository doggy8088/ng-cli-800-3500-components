import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2524Component } from './page2524.component';

@NgModule({
  declarations: [Page2524Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2524Component }])],
  exports: [Page2524Component]
})
export class Page2524Module {}
