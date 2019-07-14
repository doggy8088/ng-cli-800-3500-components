import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0154Component } from './page0154.component';

@NgModule({
  declarations: [Page0154Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0154Component }])],
  exports: [Page0154Component]
})
export class Page0154Module {}
