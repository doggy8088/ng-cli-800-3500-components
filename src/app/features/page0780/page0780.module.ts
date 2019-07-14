import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0780Component } from './page0780.component';

@NgModule({
  declarations: [Page0780Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0780Component }])],
  exports: [Page0780Component]
})
export class Page0780Module {}
