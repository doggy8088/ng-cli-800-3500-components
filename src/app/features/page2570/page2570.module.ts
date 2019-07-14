import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2570Component } from './page2570.component';

@NgModule({
  declarations: [Page2570Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2570Component }])],
  exports: [Page2570Component]
})
export class Page2570Module {}
