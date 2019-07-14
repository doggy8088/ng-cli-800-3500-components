import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0434Component } from './page0434.component';

@NgModule({
  declarations: [Page0434Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0434Component }])],
  exports: [Page0434Component]
})
export class Page0434Module {}
