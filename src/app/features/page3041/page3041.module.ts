import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3041Component } from './page3041.component';

@NgModule({
  declarations: [Page3041Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3041Component }])],
  exports: [Page3041Component]
})
export class Page3041Module {}
