import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2281Component } from './page2281.component';

@NgModule({
  declarations: [Page2281Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2281Component }])],
  exports: [Page2281Component]
})
export class Page2281Module {}
