import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0107Component } from './page0107.component';

@NgModule({
  declarations: [Page0107Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0107Component }])],
  exports: [Page0107Component]
})
export class Page0107Module {}
