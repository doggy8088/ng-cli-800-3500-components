import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0119Component } from './page0119.component';

@NgModule({
  declarations: [Page0119Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0119Component }])],
  exports: [Page0119Component]
})
export class Page0119Module {}
