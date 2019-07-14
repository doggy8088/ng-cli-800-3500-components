import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0355Component } from './page0355.component';

@NgModule({
  declarations: [Page0355Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0355Component }])],
  exports: [Page0355Component]
})
export class Page0355Module {}
