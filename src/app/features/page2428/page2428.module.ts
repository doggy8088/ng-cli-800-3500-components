import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2428Component } from './page2428.component';

@NgModule({
  declarations: [Page2428Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2428Component }])],
  exports: [Page2428Component]
})
export class Page2428Module {}
