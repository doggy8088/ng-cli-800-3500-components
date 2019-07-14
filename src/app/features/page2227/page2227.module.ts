import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2227Component } from './page2227.component';

@NgModule({
  declarations: [Page2227Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2227Component }])],
  exports: [Page2227Component]
})
export class Page2227Module {}
