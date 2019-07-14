import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3301Component } from './page3301.component';

@NgModule({
  declarations: [Page3301Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3301Component }])],
  exports: [Page3301Component]
})
export class Page3301Module {}
