import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0227Component } from './page0227.component';

@NgModule({
  declarations: [Page0227Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0227Component }])],
  exports: [Page0227Component]
})
export class Page0227Module {}
