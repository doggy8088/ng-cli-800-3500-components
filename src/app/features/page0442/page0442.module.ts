import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0442Component } from './page0442.component';

@NgModule({
  declarations: [Page0442Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0442Component }])],
  exports: [Page0442Component]
})
export class Page0442Module {}
