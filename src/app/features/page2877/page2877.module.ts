import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2877Component } from './page2877.component';

@NgModule({
  declarations: [Page2877Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2877Component }])],
  exports: [Page2877Component]
})
export class Page2877Module {}
