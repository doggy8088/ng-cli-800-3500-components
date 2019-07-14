import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0603Component } from './page0603.component';

@NgModule({
  declarations: [Page0603Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0603Component }])],
  exports: [Page0603Component]
})
export class Page0603Module {}
