import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0561Component } from './page0561.component';

@NgModule({
  declarations: [Page0561Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0561Component }])],
  exports: [Page0561Component]
})
export class Page0561Module {}
