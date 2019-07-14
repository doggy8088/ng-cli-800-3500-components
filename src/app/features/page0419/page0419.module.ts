import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0419Component } from './page0419.component';

@NgModule({
  declarations: [Page0419Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0419Component }])],
  exports: [Page0419Component]
})
export class Page0419Module {}
