import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0206Component } from './page0206.component';

@NgModule({
  declarations: [Page0206Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0206Component }])],
  exports: [Page0206Component]
})
export class Page0206Module {}
