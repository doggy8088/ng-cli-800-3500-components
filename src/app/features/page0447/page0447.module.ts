import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0447Component } from './page0447.component';

@NgModule({
  declarations: [Page0447Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0447Component }])],
  exports: [Page0447Component]
})
export class Page0447Module {}
