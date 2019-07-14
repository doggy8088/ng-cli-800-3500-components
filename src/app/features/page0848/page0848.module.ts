import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0848Component } from './page0848.component';

@NgModule({
  declarations: [Page0848Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0848Component }])],
  exports: [Page0848Component]
})
export class Page0848Module {}
