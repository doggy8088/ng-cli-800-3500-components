import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2896Component } from './page2896.component';

@NgModule({
  declarations: [Page2896Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2896Component }])],
  exports: [Page2896Component]
})
export class Page2896Module {}
