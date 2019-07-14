import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0529Component } from './page0529.component';

@NgModule({
  declarations: [Page0529Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0529Component }])],
  exports: [Page0529Component]
})
export class Page0529Module {}
