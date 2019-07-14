import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2209Component } from './page2209.component';

@NgModule({
  declarations: [Page2209Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2209Component }])],
  exports: [Page2209Component]
})
export class Page2209Module {}
