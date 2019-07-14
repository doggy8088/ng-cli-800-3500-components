import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0045Component } from './page0045.component';

@NgModule({
  declarations: [Page0045Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0045Component }])],
  exports: [Page0045Component]
})
export class Page0045Module {}
