import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2179Component } from './page2179.component';

@NgModule({
  declarations: [Page2179Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2179Component }])],
  exports: [Page2179Component]
})
export class Page2179Module {}
