import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0528Component } from './page0528.component';

@NgModule({
  declarations: [Page0528Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0528Component }])],
  exports: [Page0528Component]
})
export class Page0528Module {}
