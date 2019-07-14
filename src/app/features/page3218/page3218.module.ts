import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3218Component } from './page3218.component';

@NgModule({
  declarations: [Page3218Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3218Component }])],
  exports: [Page3218Component]
})
export class Page3218Module {}
