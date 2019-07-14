import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0280Component } from './page0280.component';

@NgModule({
  declarations: [Page0280Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0280Component }])],
  exports: [Page0280Component]
})
export class Page0280Module {}
