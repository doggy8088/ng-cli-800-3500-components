import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3341Component } from './page3341.component';

@NgModule({
  declarations: [Page3341Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3341Component }])],
  exports: [Page3341Component]
})
export class Page3341Module {}
