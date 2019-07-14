import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3318Component } from './page3318.component';

@NgModule({
  declarations: [Page3318Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3318Component }])],
  exports: [Page3318Component]
})
export class Page3318Module {}
