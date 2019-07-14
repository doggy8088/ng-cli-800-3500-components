import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2674Component } from './page2674.component';

@NgModule({
  declarations: [Page2674Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2674Component }])],
  exports: [Page2674Component]
})
export class Page2674Module {}
