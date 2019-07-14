import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0571Component } from './page0571.component';

@NgModule({
  declarations: [Page0571Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0571Component }])],
  exports: [Page0571Component]
})
export class Page0571Module {}
