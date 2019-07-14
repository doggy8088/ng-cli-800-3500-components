import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0430Component } from './page0430.component';

@NgModule({
  declarations: [Page0430Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0430Component }])],
  exports: [Page0430Component]
})
export class Page0430Module {}
