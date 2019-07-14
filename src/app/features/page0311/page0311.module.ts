import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0311Component } from './page0311.component';

@NgModule({
  declarations: [Page0311Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0311Component }])],
  exports: [Page0311Component]
})
export class Page0311Module {}
