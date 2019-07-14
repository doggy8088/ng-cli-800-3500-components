import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0870Component } from './page0870.component';

@NgModule({
  declarations: [Page0870Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0870Component }])],
  exports: [Page0870Component]
})
export class Page0870Module {}
