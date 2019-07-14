import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1576Component } from './page1576.component';

@NgModule({
  declarations: [Page1576Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1576Component }])],
  exports: [Page1576Component]
})
export class Page1576Module {}
