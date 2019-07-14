import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2197Component } from './page2197.component';

@NgModule({
  declarations: [Page2197Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2197Component }])],
  exports: [Page2197Component]
})
export class Page2197Module {}
