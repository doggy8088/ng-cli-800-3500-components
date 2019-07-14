import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2701Component } from './page2701.component';

@NgModule({
  declarations: [Page2701Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2701Component }])],
  exports: [Page2701Component]
})
export class Page2701Module {}
