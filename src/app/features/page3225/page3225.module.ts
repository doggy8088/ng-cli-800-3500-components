import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3225Component } from './page3225.component';

@NgModule({
  declarations: [Page3225Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3225Component }])],
  exports: [Page3225Component]
})
export class Page3225Module {}
