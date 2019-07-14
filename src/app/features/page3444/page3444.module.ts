import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3444Component } from './page3444.component';

@NgModule({
  declarations: [Page3444Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3444Component }])],
  exports: [Page3444Component]
})
export class Page3444Module {}
