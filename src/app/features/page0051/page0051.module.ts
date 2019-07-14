import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0051Component } from './page0051.component';

@NgModule({
  declarations: [Page0051Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0051Component }])],
  exports: [Page0051Component]
})
export class Page0051Module {}
