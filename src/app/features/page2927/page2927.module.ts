import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2927Component } from './page2927.component';

@NgModule({
  declarations: [Page2927Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2927Component }])],
  exports: [Page2927Component]
})
export class Page2927Module {}
