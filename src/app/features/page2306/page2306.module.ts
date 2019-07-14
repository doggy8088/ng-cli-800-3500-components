import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2306Component } from './page2306.component';

@NgModule({
  declarations: [Page2306Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2306Component }])],
  exports: [Page2306Component]
})
export class Page2306Module {}
