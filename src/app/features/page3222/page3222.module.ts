import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3222Component } from './page3222.component';

@NgModule({
  declarations: [Page3222Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3222Component }])],
  exports: [Page3222Component]
})
export class Page3222Module {}
