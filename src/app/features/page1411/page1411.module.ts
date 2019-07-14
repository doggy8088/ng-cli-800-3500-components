import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1411Component } from './page1411.component';

@NgModule({
  declarations: [Page1411Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1411Component }])],
  exports: [Page1411Component]
})
export class Page1411Module {}
