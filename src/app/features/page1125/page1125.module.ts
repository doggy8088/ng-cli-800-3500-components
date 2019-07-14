import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1125Component } from './page1125.component';

@NgModule({
  declarations: [Page1125Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1125Component }])],
  exports: [Page1125Component]
})
export class Page1125Module {}
