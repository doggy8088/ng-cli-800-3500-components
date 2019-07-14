import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0032Component } from './page0032.component';

@NgModule({
  declarations: [Page0032Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0032Component }])],
  exports: [Page0032Component]
})
export class Page0032Module {}
