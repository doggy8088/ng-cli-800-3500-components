import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2302Component } from './page2302.component';

@NgModule({
  declarations: [Page2302Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2302Component }])],
  exports: [Page2302Component]
})
export class Page2302Module {}
