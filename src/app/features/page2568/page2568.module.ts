import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2568Component } from './page2568.component';

@NgModule({
  declarations: [Page2568Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2568Component }])],
  exports: [Page2568Component]
})
export class Page2568Module {}
