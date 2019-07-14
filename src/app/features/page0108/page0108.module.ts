import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0108Component } from './page0108.component';

@NgModule({
  declarations: [Page0108Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0108Component }])],
  exports: [Page0108Component]
})
export class Page0108Module {}
