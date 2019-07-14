import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0222Component } from './page0222.component';

@NgModule({
  declarations: [Page0222Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0222Component }])],
  exports: [Page0222Component]
})
export class Page0222Module {}
