import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3276Component } from './page3276.component';

@NgModule({
  declarations: [Page3276Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3276Component }])],
  exports: [Page3276Component]
})
export class Page3276Module {}
