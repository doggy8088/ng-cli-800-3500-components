import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0404Component } from './page0404.component';

@NgModule({
  declarations: [Page0404Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0404Component }])],
  exports: [Page0404Component]
})
export class Page0404Module {}
