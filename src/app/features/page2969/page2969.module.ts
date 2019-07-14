import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2969Component } from './page2969.component';

@NgModule({
  declarations: [Page2969Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2969Component }])],
  exports: [Page2969Component]
})
export class Page2969Module {}
