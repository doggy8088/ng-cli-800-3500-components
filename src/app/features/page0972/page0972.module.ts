import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0972Component } from './page0972.component';

@NgModule({
  declarations: [Page0972Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0972Component }])],
  exports: [Page0972Component]
})
export class Page0972Module {}
