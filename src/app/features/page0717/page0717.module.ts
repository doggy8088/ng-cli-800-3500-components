import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0717Component } from './page0717.component';

@NgModule({
  declarations: [Page0717Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0717Component }])],
  exports: [Page0717Component]
})
export class Page0717Module {}
