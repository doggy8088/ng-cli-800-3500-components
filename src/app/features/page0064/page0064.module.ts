import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0064Component } from './page0064.component';

@NgModule({
  declarations: [Page0064Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0064Component }])],
  exports: [Page0064Component]
})
export class Page0064Module {}
