import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0318Component } from './page0318.component';

@NgModule({
  declarations: [Page0318Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0318Component }])],
  exports: [Page0318Component]
})
export class Page0318Module {}
