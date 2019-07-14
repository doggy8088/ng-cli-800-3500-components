import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3018Component } from './page3018.component';

@NgModule({
  declarations: [Page3018Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3018Component }])],
  exports: [Page3018Component]
})
export class Page3018Module {}
