import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0567Component } from './page0567.component';

@NgModule({
  declarations: [Page0567Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0567Component }])],
  exports: [Page0567Component]
})
export class Page0567Module {}
