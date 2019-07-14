import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0369Component } from './page0369.component';

@NgModule({
  declarations: [Page0369Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0369Component }])],
  exports: [Page0369Component]
})
export class Page0369Module {}
