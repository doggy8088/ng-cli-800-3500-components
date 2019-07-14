import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3389Component } from './page3389.component';

@NgModule({
  declarations: [Page3389Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3389Component }])],
  exports: [Page3389Component]
})
export class Page3389Module {}
