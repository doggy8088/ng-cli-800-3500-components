import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0025Component } from './page0025.component';

@NgModule({
  declarations: [Page0025Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0025Component }])],
  exports: [Page0025Component]
})
export class Page0025Module {}
