import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2919Component } from './page2919.component';

@NgModule({
  declarations: [Page2919Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2919Component }])],
  exports: [Page2919Component]
})
export class Page2919Module {}
