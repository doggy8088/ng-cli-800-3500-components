import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2036Component } from './page2036.component';

@NgModule({
  declarations: [Page2036Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2036Component }])],
  exports: [Page2036Component]
})
export class Page2036Module {}
