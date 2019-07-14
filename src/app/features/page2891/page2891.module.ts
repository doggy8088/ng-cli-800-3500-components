import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2891Component } from './page2891.component';

@NgModule({
  declarations: [Page2891Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2891Component }])],
  exports: [Page2891Component]
})
export class Page2891Module {}
