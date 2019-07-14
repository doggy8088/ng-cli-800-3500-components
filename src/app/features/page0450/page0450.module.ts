import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0450Component } from './page0450.component';

@NgModule({
  declarations: [Page0450Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0450Component }])],
  exports: [Page0450Component]
})
export class Page0450Module {}
