import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0015Component } from './page0015.component';

@NgModule({
  declarations: [Page0015Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0015Component }])],
  exports: [Page0015Component]
})
export class Page0015Module {}
