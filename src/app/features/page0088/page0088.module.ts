import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0088Component } from './page0088.component';

@NgModule({
  declarations: [Page0088Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0088Component }])],
  exports: [Page0088Component]
})
export class Page0088Module {}
