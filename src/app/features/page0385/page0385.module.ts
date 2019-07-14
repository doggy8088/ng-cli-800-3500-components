import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0385Component } from './page0385.component';

@NgModule({
  declarations: [Page0385Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0385Component }])],
  exports: [Page0385Component]
})
export class Page0385Module {}
