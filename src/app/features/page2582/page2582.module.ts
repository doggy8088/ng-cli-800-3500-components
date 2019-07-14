import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2582Component } from './page2582.component';

@NgModule({
  declarations: [Page2582Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2582Component }])],
  exports: [Page2582Component]
})
export class Page2582Module {}
