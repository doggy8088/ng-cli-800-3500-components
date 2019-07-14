import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3227Component } from './page3227.component';

@NgModule({
  declarations: [Page3227Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3227Component }])],
  exports: [Page3227Component]
})
export class Page3227Module {}
