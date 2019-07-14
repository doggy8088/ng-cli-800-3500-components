import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2916Component } from './page2916.component';

@NgModule({
  declarations: [Page2916Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2916Component }])],
  exports: [Page2916Component]
})
export class Page2916Module {}
