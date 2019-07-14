import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2668Component } from './page2668.component';

@NgModule({
  declarations: [Page2668Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2668Component }])],
  exports: [Page2668Component]
})
export class Page2668Module {}
