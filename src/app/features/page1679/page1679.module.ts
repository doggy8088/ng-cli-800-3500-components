import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1679Component } from './page1679.component';

@NgModule({
  declarations: [Page1679Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1679Component }])],
  exports: [Page1679Component]
})
export class Page1679Module {}
