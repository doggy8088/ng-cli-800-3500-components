import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0814Component } from './page0814.component';

@NgModule({
  declarations: [Page0814Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0814Component }])],
  exports: [Page0814Component]
})
export class Page0814Module {}
