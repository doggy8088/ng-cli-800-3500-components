import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0448Component } from './page0448.component';

@NgModule({
  declarations: [Page0448Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0448Component }])],
  exports: [Page0448Component]
})
export class Page0448Module {}
