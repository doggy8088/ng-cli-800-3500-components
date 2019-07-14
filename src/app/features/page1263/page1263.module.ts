import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1263Component } from './page1263.component';

@NgModule({
  declarations: [Page1263Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1263Component }])],
  exports: [Page1263Component]
})
export class Page1263Module {}
