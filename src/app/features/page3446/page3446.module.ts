import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3446Component } from './page3446.component';

@NgModule({
  declarations: [Page3446Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3446Component }])],
  exports: [Page3446Component]
})
export class Page3446Module {}
