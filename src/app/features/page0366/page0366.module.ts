import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0366Component } from './page0366.component';

@NgModule({
  declarations: [Page0366Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0366Component }])],
  exports: [Page0366Component]
})
export class Page0366Module {}
