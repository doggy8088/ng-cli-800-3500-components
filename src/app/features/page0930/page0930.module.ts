import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0930Component } from './page0930.component';

@NgModule({
  declarations: [Page0930Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0930Component }])],
  exports: [Page0930Component]
})
export class Page0930Module {}
