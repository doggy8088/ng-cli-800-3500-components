import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2689Component } from './page2689.component';

@NgModule({
  declarations: [Page2689Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2689Component }])],
  exports: [Page2689Component]
})
export class Page2689Module {}
