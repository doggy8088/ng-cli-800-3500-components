import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3050Component } from './page3050.component';

@NgModule({
  declarations: [Page3050Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3050Component }])],
  exports: [Page3050Component]
})
export class Page3050Module {}
