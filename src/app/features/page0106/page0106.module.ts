import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0106Component } from './page0106.component';

@NgModule({
  declarations: [Page0106Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0106Component }])],
  exports: [Page0106Component]
})
export class Page0106Module {}
