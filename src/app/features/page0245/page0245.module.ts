import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0245Component } from './page0245.component';

@NgModule({
  declarations: [Page0245Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0245Component }])],
  exports: [Page0245Component]
})
export class Page0245Module {}
