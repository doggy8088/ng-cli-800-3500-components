import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1504Component } from './page1504.component';

@NgModule({
  declarations: [Page1504Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1504Component }])],
  exports: [Page1504Component]
})
export class Page1504Module {}
