import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0218Component } from './page0218.component';

@NgModule({
  declarations: [Page0218Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0218Component }])],
  exports: [Page0218Component]
})
export class Page0218Module {}
