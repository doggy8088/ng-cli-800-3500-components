import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0887Component } from './page0887.component';

@NgModule({
  declarations: [Page0887Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0887Component }])],
  exports: [Page0887Component]
})
export class Page0887Module {}
