import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0617Component } from './page0617.component';

@NgModule({
  declarations: [Page0617Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0617Component }])],
  exports: [Page0617Component]
})
export class Page0617Module {}
