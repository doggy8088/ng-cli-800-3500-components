import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0820Component } from './page0820.component';

@NgModule({
  declarations: [Page0820Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0820Component }])],
  exports: [Page0820Component]
})
export class Page0820Module {}
