import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0438Component } from './page0438.component';

@NgModule({
  declarations: [Page0438Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0438Component }])],
  exports: [Page0438Component]
})
export class Page0438Module {}
