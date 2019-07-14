import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0998Component } from './page0998.component';

@NgModule({
  declarations: [Page0998Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0998Component }])],
  exports: [Page0998Component]
})
export class Page0998Module {}
