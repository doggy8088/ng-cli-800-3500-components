import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0969Component } from './page0969.component';

@NgModule({
  declarations: [Page0969Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0969Component }])],
  exports: [Page0969Component]
})
export class Page0969Module {}
