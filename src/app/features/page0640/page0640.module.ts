import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0640Component } from './page0640.component';

@NgModule({
  declarations: [Page0640Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0640Component }])],
  exports: [Page0640Component]
})
export class Page0640Module {}
