import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2975Component } from './page2975.component';

@NgModule({
  declarations: [Page2975Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2975Component }])],
  exports: [Page2975Component]
})
export class Page2975Module {}
