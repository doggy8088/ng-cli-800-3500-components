import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0167Component } from './page0167.component';

@NgModule({
  declarations: [Page0167Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0167Component }])],
  exports: [Page0167Component]
})
export class Page0167Module {}
