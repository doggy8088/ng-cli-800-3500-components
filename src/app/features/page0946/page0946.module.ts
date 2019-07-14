import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0946Component } from './page0946.component';

@NgModule({
  declarations: [Page0946Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0946Component }])],
  exports: [Page0946Component]
})
export class Page0946Module {}
