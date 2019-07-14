import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0077Component } from './page0077.component';

@NgModule({
  declarations: [Page0077Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0077Component }])],
  exports: [Page0077Component]
})
export class Page0077Module {}
