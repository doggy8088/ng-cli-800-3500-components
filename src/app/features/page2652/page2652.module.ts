import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2652Component } from './page2652.component';

@NgModule({
  declarations: [Page2652Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2652Component }])],
  exports: [Page2652Component]
})
export class Page2652Module {}
