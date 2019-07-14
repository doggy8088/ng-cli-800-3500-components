import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3062Component } from './page3062.component';

@NgModule({
  declarations: [Page3062Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3062Component }])],
  exports: [Page3062Component]
})
export class Page3062Module {}
