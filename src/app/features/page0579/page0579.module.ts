import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0579Component } from './page0579.component';

@NgModule({
  declarations: [Page0579Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0579Component }])],
  exports: [Page0579Component]
})
export class Page0579Module {}
