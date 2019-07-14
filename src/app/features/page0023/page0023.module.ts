import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0023Component } from './page0023.component';

@NgModule({
  declarations: [Page0023Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0023Component }])],
  exports: [Page0023Component]
})
export class Page0023Module {}
