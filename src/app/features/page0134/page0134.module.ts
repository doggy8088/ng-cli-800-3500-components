import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0134Component } from './page0134.component';

@NgModule({
  declarations: [Page0134Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0134Component }])],
  exports: [Page0134Component]
})
export class Page0134Module {}
