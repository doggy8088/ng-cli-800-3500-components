import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0350Component } from './page0350.component';

@NgModule({
  declarations: [Page0350Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0350Component }])],
  exports: [Page0350Component]
})
export class Page0350Module {}
