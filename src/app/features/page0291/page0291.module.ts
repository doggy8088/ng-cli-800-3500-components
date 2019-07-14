import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0291Component } from './page0291.component';

@NgModule({
  declarations: [Page0291Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0291Component }])],
  exports: [Page0291Component]
})
export class Page0291Module {}
