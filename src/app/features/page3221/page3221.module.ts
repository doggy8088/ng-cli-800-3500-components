import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3221Component } from './page3221.component';

@NgModule({
  declarations: [Page3221Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3221Component }])],
  exports: [Page3221Component]
})
export class Page3221Module {}
