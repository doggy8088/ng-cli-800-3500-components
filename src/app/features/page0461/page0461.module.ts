import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0461Component } from './page0461.component';

@NgModule({
  declarations: [Page0461Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0461Component }])],
  exports: [Page0461Component]
})
export class Page0461Module {}
