import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0587Component } from './page0587.component';

@NgModule({
  declarations: [Page0587Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0587Component }])],
  exports: [Page0587Component]
})
export class Page0587Module {}
