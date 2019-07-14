import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0531Component } from './page0531.component';

@NgModule({
  declarations: [Page0531Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0531Component }])],
  exports: [Page0531Component]
})
export class Page0531Module {}
