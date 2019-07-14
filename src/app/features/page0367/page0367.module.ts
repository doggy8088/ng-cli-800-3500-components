import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0367Component } from './page0367.component';

@NgModule({
  declarations: [Page0367Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0367Component }])],
  exports: [Page0367Component]
})
export class Page0367Module {}
