import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3002Component } from './page3002.component';

@NgModule({
  declarations: [Page3002Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3002Component }])],
  exports: [Page3002Component]
})
export class Page3002Module {}
