import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0573Component } from './page0573.component';

@NgModule({
  declarations: [Page0573Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0573Component }])],
  exports: [Page0573Component]
})
export class Page0573Module {}
