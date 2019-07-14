import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2235Component } from './page2235.component';

@NgModule({
  declarations: [Page2235Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2235Component }])],
  exports: [Page2235Component]
})
export class Page2235Module {}
