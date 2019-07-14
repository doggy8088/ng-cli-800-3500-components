import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0050Component } from './page0050.component';

@NgModule({
  declarations: [Page0050Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0050Component }])],
  exports: [Page0050Component]
})
export class Page0050Module {}
