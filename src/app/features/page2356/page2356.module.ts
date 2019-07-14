import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2356Component } from './page2356.component';

@NgModule({
  declarations: [Page2356Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2356Component }])],
  exports: [Page2356Component]
})
export class Page2356Module {}
