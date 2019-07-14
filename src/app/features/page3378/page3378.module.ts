import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3378Component } from './page3378.component';

@NgModule({
  declarations: [Page3378Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3378Component }])],
  exports: [Page3378Component]
})
export class Page3378Module {}
