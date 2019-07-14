import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0171Component } from './page0171.component';

@NgModule({
  declarations: [Page0171Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0171Component }])],
  exports: [Page0171Component]
})
export class Page0171Module {}
