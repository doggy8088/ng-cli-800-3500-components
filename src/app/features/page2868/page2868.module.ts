import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2868Component } from './page2868.component';

@NgModule({
  declarations: [Page2868Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2868Component }])],
  exports: [Page2868Component]
})
export class Page2868Module {}
