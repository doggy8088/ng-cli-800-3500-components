import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0143Component } from './page0143.component';

@NgModule({
  declarations: [Page0143Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0143Component }])],
  exports: [Page0143Component]
})
export class Page0143Module {}
