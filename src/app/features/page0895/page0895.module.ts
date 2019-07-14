import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0895Component } from './page0895.component';

@NgModule({
  declarations: [Page0895Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0895Component }])],
  exports: [Page0895Component]
})
export class Page0895Module {}
