import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2215Component } from './page2215.component';

@NgModule({
  declarations: [Page2215Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2215Component }])],
  exports: [Page2215Component]
})
export class Page2215Module {}
