import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2807Component } from './page2807.component';

@NgModule({
  declarations: [Page2807Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2807Component }])],
  exports: [Page2807Component]
})
export class Page2807Module {}
