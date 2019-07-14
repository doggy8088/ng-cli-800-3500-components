import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0068Component } from './page0068.component';

@NgModule({
  declarations: [Page0068Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0068Component }])],
  exports: [Page0068Component]
})
export class Page0068Module {}
