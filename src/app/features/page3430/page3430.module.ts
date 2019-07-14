import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3430Component } from './page3430.component';

@NgModule({
  declarations: [Page3430Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3430Component }])],
  exports: [Page3430Component]
})
export class Page3430Module {}
