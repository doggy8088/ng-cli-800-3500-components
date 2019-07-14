import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0970Component } from './page0970.component';

@NgModule({
  declarations: [Page0970Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0970Component }])],
  exports: [Page0970Component]
})
export class Page0970Module {}
