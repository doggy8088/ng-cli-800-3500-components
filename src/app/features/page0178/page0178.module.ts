import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0178Component } from './page0178.component';

@NgModule({
  declarations: [Page0178Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0178Component }])],
  exports: [Page0178Component]
})
export class Page0178Module {}
