import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3097Component } from './page3097.component';

@NgModule({
  declarations: [Page3097Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3097Component }])],
  exports: [Page3097Component]
})
export class Page3097Module {}
