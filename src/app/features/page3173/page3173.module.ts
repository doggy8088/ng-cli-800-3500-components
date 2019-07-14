import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3173Component } from './page3173.component';

@NgModule({
  declarations: [Page3173Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3173Component }])],
  exports: [Page3173Component]
})
export class Page3173Module {}
