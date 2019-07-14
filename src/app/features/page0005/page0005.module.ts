import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0005Component } from './page0005.component';

@NgModule({
  declarations: [Page0005Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0005Component }])],
  exports: [Page0005Component]
})
export class Page0005Module {}
