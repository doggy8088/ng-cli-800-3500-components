import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2604Component } from './page2604.component';

@NgModule({
  declarations: [Page2604Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2604Component }])],
  exports: [Page2604Component]
})
export class Page2604Module {}
