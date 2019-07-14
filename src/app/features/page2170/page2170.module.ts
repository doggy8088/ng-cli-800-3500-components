import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2170Component } from './page2170.component';

@NgModule({
  declarations: [Page2170Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2170Component }])],
  exports: [Page2170Component]
})
export class Page2170Module {}
