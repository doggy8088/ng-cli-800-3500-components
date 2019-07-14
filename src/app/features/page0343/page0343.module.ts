import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0343Component } from './page0343.component';

@NgModule({
  declarations: [Page0343Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0343Component }])],
  exports: [Page0343Component]
})
export class Page0343Module {}
