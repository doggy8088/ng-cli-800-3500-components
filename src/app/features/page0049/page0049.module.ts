import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0049Component } from './page0049.component';

@NgModule({
  declarations: [Page0049Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0049Component }])],
  exports: [Page0049Component]
})
export class Page0049Module {}
