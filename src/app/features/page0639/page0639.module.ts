import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0639Component } from './page0639.component';

@NgModule({
  declarations: [Page0639Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0639Component }])],
  exports: [Page0639Component]
})
export class Page0639Module {}
