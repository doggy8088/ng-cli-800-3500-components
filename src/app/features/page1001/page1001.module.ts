import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1001Component } from './page1001.component';

@NgModule({
  declarations: [Page1001Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1001Component }])],
  exports: [Page1001Component]
})
export class Page1001Module {}
