import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2508Component } from './page2508.component';

@NgModule({
  declarations: [Page2508Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2508Component }])],
  exports: [Page2508Component]
})
export class Page2508Module {}
