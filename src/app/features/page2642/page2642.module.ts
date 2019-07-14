import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2642Component } from './page2642.component';

@NgModule({
  declarations: [Page2642Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2642Component }])],
  exports: [Page2642Component]
})
export class Page2642Module {}
