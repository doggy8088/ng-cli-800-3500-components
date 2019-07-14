import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2841Component } from './page2841.component';

@NgModule({
  declarations: [Page2841Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2841Component }])],
  exports: [Page2841Component]
})
export class Page2841Module {}
