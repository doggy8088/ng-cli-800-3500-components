import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0360Component } from './page0360.component';

@NgModule({
  declarations: [Page0360Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0360Component }])],
  exports: [Page0360Component]
})
export class Page0360Module {}
