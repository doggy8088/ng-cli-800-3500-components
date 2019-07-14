import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0278Component } from './page0278.component';

@NgModule({
  declarations: [Page0278Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0278Component }])],
  exports: [Page0278Component]
})
export class Page0278Module {}
