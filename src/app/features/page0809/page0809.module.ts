import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0809Component } from './page0809.component';

@NgModule({
  declarations: [Page0809Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0809Component }])],
  exports: [Page0809Component]
})
export class Page0809Module {}
