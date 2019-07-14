import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2516Component } from './page2516.component';

@NgModule({
  declarations: [Page2516Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2516Component }])],
  exports: [Page2516Component]
})
export class Page2516Module {}
