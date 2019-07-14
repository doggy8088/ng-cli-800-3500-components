import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2249Component } from './page2249.component';

@NgModule({
  declarations: [Page2249Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2249Component }])],
  exports: [Page2249Component]
})
export class Page2249Module {}
