import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0160Component } from './page0160.component';

@NgModule({
  declarations: [Page0160Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0160Component }])],
  exports: [Page0160Component]
})
export class Page0160Module {}
