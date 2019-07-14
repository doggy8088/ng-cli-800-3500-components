import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2438Component } from './page2438.component';

@NgModule({
  declarations: [Page2438Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2438Component }])],
  exports: [Page2438Component]
})
export class Page2438Module {}
