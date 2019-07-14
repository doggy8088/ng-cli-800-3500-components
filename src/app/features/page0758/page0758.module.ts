import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0758Component } from './page0758.component';

@NgModule({
  declarations: [Page0758Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0758Component }])],
  exports: [Page0758Component]
})
export class Page0758Module {}
