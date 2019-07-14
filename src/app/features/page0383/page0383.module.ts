import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0383Component } from './page0383.component';

@NgModule({
  declarations: [Page0383Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0383Component }])],
  exports: [Page0383Component]
})
export class Page0383Module {}
