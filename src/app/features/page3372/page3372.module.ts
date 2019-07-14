import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3372Component } from './page3372.component';

@NgModule({
  declarations: [Page3372Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3372Component }])],
  exports: [Page3372Component]
})
export class Page3372Module {}
