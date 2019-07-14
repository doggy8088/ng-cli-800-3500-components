import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0888Component } from './page0888.component';

@NgModule({
  declarations: [Page0888Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0888Component }])],
  exports: [Page0888Component]
})
export class Page0888Module {}
