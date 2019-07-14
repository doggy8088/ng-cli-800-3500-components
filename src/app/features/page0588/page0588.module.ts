import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0588Component } from './page0588.component';

@NgModule({
  declarations: [Page0588Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0588Component }])],
  exports: [Page0588Component]
})
export class Page0588Module {}
