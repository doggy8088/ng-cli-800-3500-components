import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0455Component } from './page0455.component';

@NgModule({
  declarations: [Page0455Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0455Component }])],
  exports: [Page0455Component]
})
export class Page0455Module {}
