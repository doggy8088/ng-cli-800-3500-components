import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0965Component } from './page0965.component';

@NgModule({
  declarations: [Page0965Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0965Component }])],
  exports: [Page0965Component]
})
export class Page0965Module {}
