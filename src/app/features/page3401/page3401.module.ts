import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3401Component } from './page3401.component';

@NgModule({
  declarations: [Page3401Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3401Component }])],
  exports: [Page3401Component]
})
export class Page3401Module {}
