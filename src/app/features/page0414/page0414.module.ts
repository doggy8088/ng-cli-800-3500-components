import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0414Component } from './page0414.component';

@NgModule({
  declarations: [Page0414Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0414Component }])],
  exports: [Page0414Component]
})
export class Page0414Module {}
