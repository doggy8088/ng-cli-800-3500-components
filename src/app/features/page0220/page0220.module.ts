import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0220Component } from './page0220.component';

@NgModule({
  declarations: [Page0220Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0220Component }])],
  exports: [Page0220Component]
})
export class Page0220Module {}
