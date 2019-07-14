import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2405Component } from './page2405.component';

@NgModule({
  declarations: [Page2405Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2405Component }])],
  exports: [Page2405Component]
})
export class Page2405Module {}
