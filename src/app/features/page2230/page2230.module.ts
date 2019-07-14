import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2230Component } from './page2230.component';

@NgModule({
  declarations: [Page2230Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2230Component }])],
  exports: [Page2230Component]
})
export class Page2230Module {}
