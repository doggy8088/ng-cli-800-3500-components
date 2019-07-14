import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0172Component } from './page0172.component';

@NgModule({
  declarations: [Page0172Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0172Component }])],
  exports: [Page0172Component]
})
export class Page0172Module {}
