import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3328Component } from './page3328.component';

@NgModule({
  declarations: [Page3328Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3328Component }])],
  exports: [Page3328Component]
})
export class Page3328Module {}
