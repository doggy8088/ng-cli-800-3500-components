import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1773Component } from './page1773.component';

@NgModule({
  declarations: [Page1773Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1773Component }])],
  exports: [Page1773Component]
})
export class Page1773Module {}
