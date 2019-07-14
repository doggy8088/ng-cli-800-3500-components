import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2148Component } from './page2148.component';

@NgModule({
  declarations: [Page2148Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2148Component }])],
  exports: [Page2148Component]
})
export class Page2148Module {}
