import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0002Component } from './page0002.component';

@NgModule({
  declarations: [Page0002Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0002Component }])],
  exports: [Page0002Component]
})
export class Page0002Module {}
