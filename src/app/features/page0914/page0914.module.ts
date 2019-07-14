import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0914Component } from './page0914.component';

@NgModule({
  declarations: [Page0914Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0914Component }])],
  exports: [Page0914Component]
})
export class Page0914Module {}
