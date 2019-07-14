import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0727Component } from './page0727.component';

@NgModule({
  declarations: [Page0727Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0727Component }])],
  exports: [Page0727Component]
})
export class Page0727Module {}
