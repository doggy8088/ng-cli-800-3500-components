import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2894Component } from './page2894.component';

@NgModule({
  declarations: [Page2894Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2894Component }])],
  exports: [Page2894Component]
})
export class Page2894Module {}
