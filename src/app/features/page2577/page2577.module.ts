import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2577Component } from './page2577.component';

@NgModule({
  declarations: [Page2577Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2577Component }])],
  exports: [Page2577Component]
})
export class Page2577Module {}
