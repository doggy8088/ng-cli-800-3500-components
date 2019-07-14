import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0595Component } from './page0595.component';

@NgModule({
  declarations: [Page0595Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0595Component }])],
  exports: [Page0595Component]
})
export class Page0595Module {}
