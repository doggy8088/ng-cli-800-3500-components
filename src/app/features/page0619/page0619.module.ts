import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0619Component } from './page0619.component';

@NgModule({
  declarations: [Page0619Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0619Component }])],
  exports: [Page0619Component]
})
export class Page0619Module {}
