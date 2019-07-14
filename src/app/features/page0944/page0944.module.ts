import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0944Component } from './page0944.component';

@NgModule({
  declarations: [Page0944Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0944Component }])],
  exports: [Page0944Component]
})
export class Page0944Module {}
