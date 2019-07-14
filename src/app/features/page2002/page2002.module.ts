import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2002Component } from './page2002.component';

@NgModule({
  declarations: [Page2002Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2002Component }])],
  exports: [Page2002Component]
})
export class Page2002Module {}
