import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2741Component } from './page2741.component';

@NgModule({
  declarations: [Page2741Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2741Component }])],
  exports: [Page2741Component]
})
export class Page2741Module {}
