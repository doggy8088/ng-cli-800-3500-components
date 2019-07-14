import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2394Component } from './page2394.component';

@NgModule({
  declarations: [Page2394Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2394Component }])],
  exports: [Page2394Component]
})
export class Page2394Module {}
