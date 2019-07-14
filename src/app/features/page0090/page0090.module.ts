import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0090Component } from './page0090.component';

@NgModule({
  declarations: [Page0090Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0090Component }])],
  exports: [Page0090Component]
})
export class Page0090Module {}
