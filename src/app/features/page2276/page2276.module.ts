import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2276Component } from './page2276.component';

@NgModule({
  declarations: [Page2276Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2276Component }])],
  exports: [Page2276Component]
})
export class Page2276Module {}
