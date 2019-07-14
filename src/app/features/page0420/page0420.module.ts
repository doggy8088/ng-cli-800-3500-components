import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0420Component } from './page0420.component';

@NgModule({
  declarations: [Page0420Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0420Component }])],
  exports: [Page0420Component]
})
export class Page0420Module {}
