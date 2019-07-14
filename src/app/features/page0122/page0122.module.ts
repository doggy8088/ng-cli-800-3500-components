import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0122Component } from './page0122.component';

@NgModule({
  declarations: [Page0122Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0122Component }])],
  exports: [Page0122Component]
})
export class Page0122Module {}
