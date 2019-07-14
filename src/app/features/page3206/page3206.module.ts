import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3206Component } from './page3206.component';

@NgModule({
  declarations: [Page3206Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3206Component }])],
  exports: [Page3206Component]
})
export class Page3206Module {}
