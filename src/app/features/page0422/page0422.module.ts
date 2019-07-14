import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0422Component } from './page0422.component';

@NgModule({
  declarations: [Page0422Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0422Component }])],
  exports: [Page0422Component]
})
export class Page0422Module {}
