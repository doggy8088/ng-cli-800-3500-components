import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0135Component } from './page0135.component';

@NgModule({
  declarations: [Page0135Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0135Component }])],
  exports: [Page0135Component]
})
export class Page0135Module {}
