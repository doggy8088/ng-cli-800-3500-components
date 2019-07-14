import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0047Component } from './page0047.component';

@NgModule({
  declarations: [Page0047Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0047Component }])],
  exports: [Page0047Component]
})
export class Page0047Module {}
