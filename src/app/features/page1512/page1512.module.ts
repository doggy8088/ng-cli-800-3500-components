import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1512Component } from './page1512.component';

@NgModule({
  declarations: [Page1512Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1512Component }])],
  exports: [Page1512Component]
})
export class Page1512Module {}
