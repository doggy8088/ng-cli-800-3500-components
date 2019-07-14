import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3496Component } from './page3496.component';

@NgModule({
  declarations: [Page3496Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3496Component }])],
  exports: [Page3496Component]
})
export class Page3496Module {}
