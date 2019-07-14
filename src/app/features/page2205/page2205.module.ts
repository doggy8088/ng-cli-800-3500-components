import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2205Component } from './page2205.component';

@NgModule({
  declarations: [Page2205Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2205Component }])],
  exports: [Page2205Component]
})
export class Page2205Module {}
