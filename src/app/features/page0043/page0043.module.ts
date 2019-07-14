import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0043Component } from './page0043.component';

@NgModule({
  declarations: [Page0043Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0043Component }])],
  exports: [Page0043Component]
})
export class Page0043Module {}
