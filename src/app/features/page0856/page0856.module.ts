import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0856Component } from './page0856.component';

@NgModule({
  declarations: [Page0856Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0856Component }])],
  exports: [Page0856Component]
})
export class Page0856Module {}
