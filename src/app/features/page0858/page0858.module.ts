import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0858Component } from './page0858.component';

@NgModule({
  declarations: [Page0858Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0858Component }])],
  exports: [Page0858Component]
})
export class Page0858Module {}
