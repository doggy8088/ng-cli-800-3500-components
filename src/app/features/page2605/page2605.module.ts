import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2605Component } from './page2605.component';

@NgModule({
  declarations: [Page2605Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2605Component }])],
  exports: [Page2605Component]
})
export class Page2605Module {}
