import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2535Component } from './page2535.component';

@NgModule({
  declarations: [Page2535Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2535Component }])],
  exports: [Page2535Component]
})
export class Page2535Module {}
