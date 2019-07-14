import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2609Component } from './page2609.component';

@NgModule({
  declarations: [Page2609Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2609Component }])],
  exports: [Page2609Component]
})
export class Page2609Module {}
