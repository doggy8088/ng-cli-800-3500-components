import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2373Component } from './page2373.component';

@NgModule({
  declarations: [Page2373Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2373Component }])],
  exports: [Page2373Component]
})
export class Page2373Module {}
