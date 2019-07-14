import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0613Component } from './page0613.component';

@NgModule({
  declarations: [Page0613Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0613Component }])],
  exports: [Page0613Component]
})
export class Page0613Module {}
