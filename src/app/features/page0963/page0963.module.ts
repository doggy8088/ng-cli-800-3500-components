import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0963Component } from './page0963.component';

@NgModule({
  declarations: [Page0963Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0963Component }])],
  exports: [Page0963Component]
})
export class Page0963Module {}
