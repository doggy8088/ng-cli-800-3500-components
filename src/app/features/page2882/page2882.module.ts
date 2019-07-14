import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2882Component } from './page2882.component';

@NgModule({
  declarations: [Page2882Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2882Component }])],
  exports: [Page2882Component]
})
export class Page2882Module {}
