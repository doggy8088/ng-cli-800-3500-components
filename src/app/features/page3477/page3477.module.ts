import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3477Component } from './page3477.component';

@NgModule({
  declarations: [Page3477Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3477Component }])],
  exports: [Page3477Component]
})
export class Page3477Module {}
