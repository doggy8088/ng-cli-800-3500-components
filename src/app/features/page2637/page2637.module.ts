import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2637Component } from './page2637.component';

@NgModule({
  declarations: [Page2637Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2637Component }])],
  exports: [Page2637Component]
})
export class Page2637Module {}
