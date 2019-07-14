import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0298Component } from './page0298.component';

@NgModule({
  declarations: [Page0298Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0298Component }])],
  exports: [Page0298Component]
})
export class Page0298Module {}
