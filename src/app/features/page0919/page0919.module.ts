import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0919Component } from './page0919.component';

@NgModule({
  declarations: [Page0919Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0919Component }])],
  exports: [Page0919Component]
})
export class Page0919Module {}
