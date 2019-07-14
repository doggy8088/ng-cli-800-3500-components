import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0874Component } from './page0874.component';

@NgModule({
  declarations: [Page0874Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0874Component }])],
  exports: [Page0874Component]
})
export class Page0874Module {}
