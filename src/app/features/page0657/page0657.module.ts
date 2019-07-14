import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0657Component } from './page0657.component';

@NgModule({
  declarations: [Page0657Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0657Component }])],
  exports: [Page0657Component]
})
export class Page0657Module {}
