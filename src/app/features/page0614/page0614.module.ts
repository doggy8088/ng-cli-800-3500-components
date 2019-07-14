import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0614Component } from './page0614.component';

@NgModule({
  declarations: [Page0614Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0614Component }])],
  exports: [Page0614Component]
})
export class Page0614Module {}
