import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0087Component } from './page0087.component';

@NgModule({
  declarations: [Page0087Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0087Component }])],
  exports: [Page0087Component]
})
export class Page0087Module {}
