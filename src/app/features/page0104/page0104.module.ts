import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0104Component } from './page0104.component';

@NgModule({
  declarations: [Page0104Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0104Component }])],
  exports: [Page0104Component]
})
export class Page0104Module {}
