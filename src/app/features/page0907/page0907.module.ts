import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0907Component } from './page0907.component';

@NgModule({
  declarations: [Page0907Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0907Component }])],
  exports: [Page0907Component]
})
export class Page0907Module {}
