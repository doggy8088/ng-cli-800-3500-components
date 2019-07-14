import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2999Component } from './page2999.component';

@NgModule({
  declarations: [Page2999Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2999Component }])],
  exports: [Page2999Component]
})
export class Page2999Module {}
