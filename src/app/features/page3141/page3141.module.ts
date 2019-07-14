import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3141Component } from './page3141.component';

@NgModule({
  declarations: [Page3141Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3141Component }])],
  exports: [Page3141Component]
})
export class Page3141Module {}
