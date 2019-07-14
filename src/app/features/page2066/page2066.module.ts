import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2066Component } from './page2066.component';

@NgModule({
  declarations: [Page2066Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2066Component }])],
  exports: [Page2066Component]
})
export class Page2066Module {}
