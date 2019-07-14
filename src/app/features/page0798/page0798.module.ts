import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0798Component } from './page0798.component';

@NgModule({
  declarations: [Page0798Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0798Component }])],
  exports: [Page0798Component]
})
export class Page0798Module {}
