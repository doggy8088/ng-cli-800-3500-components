import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0127Component } from './page0127.component';

@NgModule({
  declarations: [Page0127Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0127Component }])],
  exports: [Page0127Component]
})
export class Page0127Module {}
