import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0501Component } from './page0501.component';

@NgModule({
  declarations: [Page0501Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0501Component }])],
  exports: [Page0501Component]
})
export class Page0501Module {}
