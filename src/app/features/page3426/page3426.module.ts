import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3426Component } from './page3426.component';

@NgModule({
  declarations: [Page3426Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3426Component }])],
  exports: [Page3426Component]
})
export class Page3426Module {}
