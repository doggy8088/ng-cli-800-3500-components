import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1398Component } from './page1398.component';

@NgModule({
  declarations: [Page1398Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1398Component }])],
  exports: [Page1398Component]
})
export class Page1398Module {}
