import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0629Component } from './page0629.component';

@NgModule({
  declarations: [Page0629Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0629Component }])],
  exports: [Page0629Component]
})
export class Page0629Module {}
