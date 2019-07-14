import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2080Component } from './page2080.component';

@NgModule({
  declarations: [Page2080Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2080Component }])],
  exports: [Page2080Component]
})
export class Page2080Module {}
