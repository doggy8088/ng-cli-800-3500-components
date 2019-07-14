import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0677Component } from './page0677.component';

@NgModule({
  declarations: [Page0677Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0677Component }])],
  exports: [Page0677Component]
})
export class Page0677Module {}
