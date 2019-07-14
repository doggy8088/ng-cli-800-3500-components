import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0679Component } from './page0679.component';

@NgModule({
  declarations: [Page0679Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0679Component }])],
  exports: [Page0679Component]
})
export class Page0679Module {}
