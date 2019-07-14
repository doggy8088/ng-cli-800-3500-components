import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2867Component } from './page2867.component';

@NgModule({
  declarations: [Page2867Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2867Component }])],
  exports: [Page2867Component]
})
export class Page2867Module {}
