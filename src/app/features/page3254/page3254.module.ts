import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3254Component } from './page3254.component';

@NgModule({
  declarations: [Page3254Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3254Component }])],
  exports: [Page3254Component]
})
export class Page3254Module {}
