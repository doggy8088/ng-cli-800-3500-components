import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0853Component } from './page0853.component';

@NgModule({
  declarations: [Page0853Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0853Component }])],
  exports: [Page0853Component]
})
export class Page0853Module {}
