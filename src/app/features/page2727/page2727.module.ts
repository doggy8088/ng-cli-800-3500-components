import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2727Component } from './page2727.component';

@NgModule({
  declarations: [Page2727Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2727Component }])],
  exports: [Page2727Component]
})
export class Page2727Module {}
