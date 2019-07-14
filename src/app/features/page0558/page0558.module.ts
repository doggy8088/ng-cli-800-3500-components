import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0558Component } from './page0558.component';

@NgModule({
  declarations: [Page0558Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0558Component }])],
  exports: [Page0558Component]
})
export class Page0558Module {}
