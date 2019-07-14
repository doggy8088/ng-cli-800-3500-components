import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0357Component } from './page0357.component';

@NgModule({
  declarations: [Page0357Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0357Component }])],
  exports: [Page0357Component]
})
export class Page0357Module {}
