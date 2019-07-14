import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2584Component } from './page2584.component';

@NgModule({
  declarations: [Page2584Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2584Component }])],
  exports: [Page2584Component]
})
export class Page2584Module {}
