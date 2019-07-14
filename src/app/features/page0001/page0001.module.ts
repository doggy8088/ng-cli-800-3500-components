import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0001Component } from './page0001.component';

@NgModule({
  declarations: [Page0001Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0001Component }])],
  exports: [Page0001Component]
})
export class Page0001Module {}
