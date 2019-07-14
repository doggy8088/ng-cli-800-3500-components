import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2510Component } from './page2510.component';

@NgModule({
  declarations: [Page2510Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2510Component }])],
  exports: [Page2510Component]
})
export class Page2510Module {}
