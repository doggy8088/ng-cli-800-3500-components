import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0437Component } from './page0437.component';

@NgModule({
  declarations: [Page0437Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0437Component }])],
  exports: [Page0437Component]
})
export class Page0437Module {}
