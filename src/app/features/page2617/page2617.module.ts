import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2617Component } from './page2617.component';

@NgModule({
  declarations: [Page2617Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2617Component }])],
  exports: [Page2617Component]
})
export class Page2617Module {}
