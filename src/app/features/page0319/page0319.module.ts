import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0319Component } from './page0319.component';

@NgModule({
  declarations: [Page0319Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0319Component }])],
  exports: [Page0319Component]
})
export class Page0319Module {}
