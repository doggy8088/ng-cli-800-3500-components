import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0822Component } from './page0822.component';

@NgModule({
  declarations: [Page0822Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0822Component }])],
  exports: [Page0822Component]
})
export class Page0822Module {}
