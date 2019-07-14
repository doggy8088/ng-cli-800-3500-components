import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3463Component } from './page3463.component';

@NgModule({
  declarations: [Page3463Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3463Component }])],
  exports: [Page3463Component]
})
export class Page3463Module {}
