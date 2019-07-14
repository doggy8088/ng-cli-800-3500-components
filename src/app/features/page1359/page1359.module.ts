import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1359Component } from './page1359.component';

@NgModule({
  declarations: [Page1359Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1359Component }])],
  exports: [Page1359Component]
})
export class Page1359Module {}
