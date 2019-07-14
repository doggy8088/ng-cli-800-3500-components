import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0138Component } from './page0138.component';

@NgModule({
  declarations: [Page0138Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0138Component }])],
  exports: [Page0138Component]
})
export class Page0138Module {}
