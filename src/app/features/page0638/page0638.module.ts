import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0638Component } from './page0638.component';

@NgModule({
  declarations: [Page0638Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0638Component }])],
  exports: [Page0638Component]
})
export class Page0638Module {}
