import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2461Component } from './page2461.component';

@NgModule({
  declarations: [Page2461Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2461Component }])],
  exports: [Page2461Component]
})
export class Page2461Module {}
