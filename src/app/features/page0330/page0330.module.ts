import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0330Component } from './page0330.component';

@NgModule({
  declarations: [Page0330Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0330Component }])],
  exports: [Page0330Component]
})
export class Page0330Module {}
