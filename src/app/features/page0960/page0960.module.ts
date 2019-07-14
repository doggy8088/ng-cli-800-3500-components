import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0960Component } from './page0960.component';

@NgModule({
  declarations: [Page0960Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0960Component }])],
  exports: [Page0960Component]
})
export class Page0960Module {}
