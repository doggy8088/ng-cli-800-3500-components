import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0871Component } from './page0871.component';

@NgModule({
  declarations: [Page0871Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0871Component }])],
  exports: [Page0871Component]
})
export class Page0871Module {}
