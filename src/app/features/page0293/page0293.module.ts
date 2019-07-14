import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0293Component } from './page0293.component';

@NgModule({
  declarations: [Page0293Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0293Component }])],
  exports: [Page0293Component]
})
export class Page0293Module {}
