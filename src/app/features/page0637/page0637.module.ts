import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0637Component } from './page0637.component';

@NgModule({
  declarations: [Page0637Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0637Component }])],
  exports: [Page0637Component]
})
export class Page0637Module {}
