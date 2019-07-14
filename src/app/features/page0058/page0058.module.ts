import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0058Component } from './page0058.component';

@NgModule({
  declarations: [Page0058Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0058Component }])],
  exports: [Page0058Component]
})
export class Page0058Module {}
