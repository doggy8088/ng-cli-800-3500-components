import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2129Component } from './page2129.component';

@NgModule({
  declarations: [Page2129Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2129Component }])],
  exports: [Page2129Component]
})
export class Page2129Module {}
