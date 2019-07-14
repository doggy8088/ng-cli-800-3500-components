import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0063Component } from './page0063.component';

@NgModule({
  declarations: [Page0063Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0063Component }])],
  exports: [Page0063Component]
})
export class Page0063Module {}
