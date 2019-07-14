import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2785Component } from './page2785.component';

@NgModule({
  declarations: [Page2785Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2785Component }])],
  exports: [Page2785Component]
})
export class Page2785Module {}
