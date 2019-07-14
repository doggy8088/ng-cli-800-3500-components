import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2646Component } from './page2646.component';

@NgModule({
  declarations: [Page2646Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2646Component }])],
  exports: [Page2646Component]
})
export class Page2646Module {}
