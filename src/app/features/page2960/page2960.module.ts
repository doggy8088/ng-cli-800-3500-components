import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2960Component } from './page2960.component';

@NgModule({
  declarations: [Page2960Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2960Component }])],
  exports: [Page2960Component]
})
export class Page2960Module {}
