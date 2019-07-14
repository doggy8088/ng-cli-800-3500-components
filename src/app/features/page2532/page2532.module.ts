import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2532Component } from './page2532.component';

@NgModule({
  declarations: [Page2532Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2532Component }])],
  exports: [Page2532Component]
})
export class Page2532Module {}
