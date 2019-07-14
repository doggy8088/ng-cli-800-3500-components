import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0525Component } from './page0525.component';

@NgModule({
  declarations: [Page0525Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0525Component }])],
  exports: [Page0525Component]
})
export class Page0525Module {}
