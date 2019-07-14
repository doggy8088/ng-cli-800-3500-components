import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3392Component } from './page3392.component';

@NgModule({
  declarations: [Page3392Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3392Component }])],
  exports: [Page3392Component]
})
export class Page3392Module {}
