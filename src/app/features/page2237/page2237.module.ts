import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2237Component } from './page2237.component';

@NgModule({
  declarations: [Page2237Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2237Component }])],
  exports: [Page2237Component]
})
export class Page2237Module {}
