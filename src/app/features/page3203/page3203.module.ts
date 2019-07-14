import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3203Component } from './page3203.component';

@NgModule({
  declarations: [Page3203Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3203Component }])],
  exports: [Page3203Component]
})
export class Page3203Module {}
