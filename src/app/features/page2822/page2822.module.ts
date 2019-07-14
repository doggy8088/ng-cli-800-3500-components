import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2822Component } from './page2822.component';

@NgModule({
  declarations: [Page2822Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2822Component }])],
  exports: [Page2822Component]
})
export class Page2822Module {}
