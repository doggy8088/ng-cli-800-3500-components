import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0508Component } from './page0508.component';

@NgModule({
  declarations: [Page0508Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0508Component }])],
  exports: [Page0508Component]
})
export class Page0508Module {}
