import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0912Component } from './page0912.component';

@NgModule({
  declarations: [Page0912Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0912Component }])],
  exports: [Page0912Component]
})
export class Page0912Module {}
