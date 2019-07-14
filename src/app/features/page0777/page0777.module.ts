import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0777Component } from './page0777.component';

@NgModule({
  declarations: [Page0777Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0777Component }])],
  exports: [Page0777Component]
})
export class Page0777Module {}
