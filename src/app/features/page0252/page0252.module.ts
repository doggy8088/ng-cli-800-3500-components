import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0252Component } from './page0252.component';

@NgModule({
  declarations: [Page0252Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0252Component }])],
  exports: [Page0252Component]
})
export class Page0252Module {}
