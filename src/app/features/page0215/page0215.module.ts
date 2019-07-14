import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0215Component } from './page0215.component';

@NgModule({
  declarations: [Page0215Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0215Component }])],
  exports: [Page0215Component]
})
export class Page0215Module {}
