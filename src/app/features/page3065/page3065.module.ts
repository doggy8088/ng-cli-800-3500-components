import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3065Component } from './page3065.component';

@NgModule({
  declarations: [Page3065Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3065Component }])],
  exports: [Page3065Component]
})
export class Page3065Module {}
