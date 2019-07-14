import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0756Component } from './page0756.component';

@NgModule({
  declarations: [Page0756Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0756Component }])],
  exports: [Page0756Component]
})
export class Page0756Module {}
