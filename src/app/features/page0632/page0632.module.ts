import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0632Component } from './page0632.component';

@NgModule({
  declarations: [Page0632Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0632Component }])],
  exports: [Page0632Component]
})
export class Page0632Module {}
