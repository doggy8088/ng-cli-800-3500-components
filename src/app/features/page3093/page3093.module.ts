import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3093Component } from './page3093.component';

@NgModule({
  declarations: [Page3093Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3093Component }])],
  exports: [Page3093Component]
})
export class Page3093Module {}
