import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0463Component } from './page0463.component';

@NgModule({
  declarations: [Page0463Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0463Component }])],
  exports: [Page0463Component]
})
export class Page0463Module {}
