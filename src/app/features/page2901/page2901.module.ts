import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2901Component } from './page2901.component';

@NgModule({
  declarations: [Page2901Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2901Component }])],
  exports: [Page2901Component]
})
export class Page2901Module {}
