import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0790Component } from './page0790.component';

@NgModule({
  declarations: [Page0790Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0790Component }])],
  exports: [Page0790Component]
})
export class Page0790Module {}
