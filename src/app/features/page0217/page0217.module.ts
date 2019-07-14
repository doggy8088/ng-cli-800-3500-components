import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0217Component } from './page0217.component';

@NgModule({
  declarations: [Page0217Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0217Component }])],
  exports: [Page0217Component]
})
export class Page0217Module {}
