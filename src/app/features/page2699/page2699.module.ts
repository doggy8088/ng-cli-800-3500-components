import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2699Component } from './page2699.component';

@NgModule({
  declarations: [Page2699Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2699Component }])],
  exports: [Page2699Component]
})
export class Page2699Module {}
