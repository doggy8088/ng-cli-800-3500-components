import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0730Component } from './page0730.component';

@NgModule({
  declarations: [Page0730Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0730Component }])],
  exports: [Page0730Component]
})
export class Page0730Module {}
