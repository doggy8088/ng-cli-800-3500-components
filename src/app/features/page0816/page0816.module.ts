import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0816Component } from './page0816.component';

@NgModule({
  declarations: [Page0816Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0816Component }])],
  exports: [Page0816Component]
})
export class Page0816Module {}
