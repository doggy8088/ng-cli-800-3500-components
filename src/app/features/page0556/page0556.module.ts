import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0556Component } from './page0556.component';

@NgModule({
  declarations: [Page0556Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0556Component }])],
  exports: [Page0556Component]
})
export class Page0556Module {}
