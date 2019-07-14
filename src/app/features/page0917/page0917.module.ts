import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0917Component } from './page0917.component';

@NgModule({
  declarations: [Page0917Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0917Component }])],
  exports: [Page0917Component]
})
export class Page0917Module {}
