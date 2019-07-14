import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2576Component } from './page2576.component';

@NgModule({
  declarations: [Page2576Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2576Component }])],
  exports: [Page2576Component]
})
export class Page2576Module {}
