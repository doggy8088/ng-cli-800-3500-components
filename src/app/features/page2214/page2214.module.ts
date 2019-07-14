import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2214Component } from './page2214.component';

@NgModule({
  declarations: [Page2214Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2214Component }])],
  exports: [Page2214Component]
})
export class Page2214Module {}
