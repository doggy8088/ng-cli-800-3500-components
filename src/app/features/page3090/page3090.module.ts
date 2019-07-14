import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3090Component } from './page3090.component';

@NgModule({
  declarations: [Page3090Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3090Component }])],
  exports: [Page3090Component]
})
export class Page3090Module {}
