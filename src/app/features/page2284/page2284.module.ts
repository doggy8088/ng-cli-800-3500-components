import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2284Component } from './page2284.component';

@NgModule({
  declarations: [Page2284Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2284Component }])],
  exports: [Page2284Component]
})
export class Page2284Module {}
