import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3334Component } from './page3334.component';

@NgModule({
  declarations: [Page3334Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3334Component }])],
  exports: [Page3334Component]
})
export class Page3334Module {}
