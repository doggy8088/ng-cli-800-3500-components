import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0418Component } from './page0418.component';

@NgModule({
  declarations: [Page0418Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0418Component }])],
  exports: [Page0418Component]
})
export class Page0418Module {}
