import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0054Component } from './page0054.component';

@NgModule({
  declarations: [Page0054Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0054Component }])],
  exports: [Page0054Component]
})
export class Page0054Module {}
