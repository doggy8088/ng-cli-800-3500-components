import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0472Component } from './page0472.component';

@NgModule({
  declarations: [Page0472Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0472Component }])],
  exports: [Page0472Component]
})
export class Page0472Module {}
