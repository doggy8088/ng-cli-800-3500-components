import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0431Component } from './page0431.component';

@NgModule({
  declarations: [Page0431Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0431Component }])],
  exports: [Page0431Component]
})
export class Page0431Module {}
