import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2107Component } from './page2107.component';

@NgModule({
  declarations: [Page2107Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2107Component }])],
  exports: [Page2107Component]
})
export class Page2107Module {}
