import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0924Component } from './page0924.component';

@NgModule({
  declarations: [Page0924Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0924Component }])],
  exports: [Page0924Component]
})
export class Page0924Module {}
