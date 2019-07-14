import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0316Component } from './page0316.component';

@NgModule({
  declarations: [Page0316Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0316Component }])],
  exports: [Page0316Component]
})
export class Page0316Module {}
