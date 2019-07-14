import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0412Component } from './page0412.component';

@NgModule({
  declarations: [Page0412Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0412Component }])],
  exports: [Page0412Component]
})
export class Page0412Module {}
