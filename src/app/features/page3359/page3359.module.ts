import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3359Component } from './page3359.component';

@NgModule({
  declarations: [Page3359Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3359Component }])],
  exports: [Page3359Component]
})
export class Page3359Module {}
