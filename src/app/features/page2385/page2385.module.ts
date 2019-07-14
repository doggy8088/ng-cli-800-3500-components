import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2385Component } from './page2385.component';

@NgModule({
  declarations: [Page2385Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2385Component }])],
  exports: [Page2385Component]
})
export class Page2385Module {}
