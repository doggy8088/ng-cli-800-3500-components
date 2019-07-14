import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2887Component } from './page2887.component';

@NgModule({
  declarations: [Page2887Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2887Component }])],
  exports: [Page2887Component]
})
export class Page2887Module {}
