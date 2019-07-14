import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3345Component } from './page3345.component';

@NgModule({
  declarations: [Page3345Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3345Component }])],
  exports: [Page3345Component]
})
export class Page3345Module {}
