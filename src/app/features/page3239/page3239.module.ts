import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3239Component } from './page3239.component';

@NgModule({
  declarations: [Page3239Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3239Component }])],
  exports: [Page3239Component]
})
export class Page3239Module {}
