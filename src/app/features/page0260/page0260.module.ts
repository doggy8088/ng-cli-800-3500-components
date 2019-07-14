import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0260Component } from './page0260.component';

@NgModule({
  declarations: [Page0260Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0260Component }])],
  exports: [Page0260Component]
})
export class Page0260Module {}
