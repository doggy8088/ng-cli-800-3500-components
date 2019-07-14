import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0224Component } from './page0224.component';

@NgModule({
  declarations: [Page0224Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0224Component }])],
  exports: [Page0224Component]
})
export class Page0224Module {}
