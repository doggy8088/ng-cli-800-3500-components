import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2648Component } from './page2648.component';

@NgModule({
  declarations: [Page2648Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2648Component }])],
  exports: [Page2648Component]
})
export class Page2648Module {}
