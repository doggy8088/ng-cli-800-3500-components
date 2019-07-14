import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0663Component } from './page0663.component';

@NgModule({
  declarations: [Page0663Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0663Component }])],
  exports: [Page0663Component]
})
export class Page0663Module {}
