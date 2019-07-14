import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2779Component } from './page2779.component';

@NgModule({
  declarations: [Page2779Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2779Component }])],
  exports: [Page2779Component]
})
export class Page2779Module {}
