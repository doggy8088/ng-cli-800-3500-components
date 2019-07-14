import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3434Component } from './page3434.component';

@NgModule({
  declarations: [Page3434Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3434Component }])],
  exports: [Page3434Component]
})
export class Page3434Module {}
