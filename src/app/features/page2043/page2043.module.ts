import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2043Component } from './page2043.component';

@NgModule({
  declarations: [Page2043Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2043Component }])],
  exports: [Page2043Component]
})
export class Page2043Module {}
