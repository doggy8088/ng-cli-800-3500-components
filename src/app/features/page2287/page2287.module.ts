import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2287Component } from './page2287.component';

@NgModule({
  declarations: [Page2287Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2287Component }])],
  exports: [Page2287Component]
})
export class Page2287Module {}
