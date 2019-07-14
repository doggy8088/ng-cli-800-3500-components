import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2202Component } from './page2202.component';

@NgModule({
  declarations: [Page2202Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2202Component }])],
  exports: [Page2202Component]
})
export class Page2202Module {}
