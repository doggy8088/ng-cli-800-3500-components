import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0392Component } from './page0392.component';

@NgModule({
  declarations: [Page0392Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0392Component }])],
  exports: [Page0392Component]
})
export class Page0392Module {}
