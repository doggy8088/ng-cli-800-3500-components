import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0239Component } from './page0239.component';

@NgModule({
  declarations: [Page0239Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0239Component }])],
  exports: [Page0239Component]
})
export class Page0239Module {}
