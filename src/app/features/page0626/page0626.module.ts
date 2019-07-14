import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0626Component } from './page0626.component';

@NgModule({
  declarations: [Page0626Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0626Component }])],
  exports: [Page0626Component]
})
export class Page0626Module {}
