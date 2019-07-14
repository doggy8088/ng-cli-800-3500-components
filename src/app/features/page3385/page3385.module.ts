import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3385Component } from './page3385.component';

@NgModule({
  declarations: [Page3385Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3385Component }])],
  exports: [Page3385Component]
})
export class Page3385Module {}
