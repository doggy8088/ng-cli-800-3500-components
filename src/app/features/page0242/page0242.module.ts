import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0242Component } from './page0242.component';

@NgModule({
  declarations: [Page0242Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0242Component }])],
  exports: [Page0242Component]
})
export class Page0242Module {}
