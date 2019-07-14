import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0923Component } from './page0923.component';

@NgModule({
  declarations: [Page0923Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0923Component }])],
  exports: [Page0923Component]
})
export class Page0923Module {}
