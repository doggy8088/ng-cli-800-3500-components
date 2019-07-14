import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0961Component } from './page0961.component';

@NgModule({
  declarations: [Page0961Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0961Component }])],
  exports: [Page0961Component]
})
export class Page0961Module {}
