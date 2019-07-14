import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3410Component } from './page3410.component';

@NgModule({
  declarations: [Page3410Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3410Component }])],
  exports: [Page3410Component]
})
export class Page3410Module {}
