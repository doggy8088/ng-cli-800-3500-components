import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0034Component } from './page0034.component';

@NgModule({
  declarations: [Page0034Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0034Component }])],
  exports: [Page0034Component]
})
export class Page0034Module {}
