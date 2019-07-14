import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0391Component } from './page0391.component';

@NgModule({
  declarations: [Page0391Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0391Component }])],
  exports: [Page0391Component]
})
export class Page0391Module {}
