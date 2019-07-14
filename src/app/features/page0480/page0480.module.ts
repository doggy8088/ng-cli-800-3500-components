import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0480Component } from './page0480.component';

@NgModule({
  declarations: [Page0480Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0480Component }])],
  exports: [Page0480Component]
})
export class Page0480Module {}
