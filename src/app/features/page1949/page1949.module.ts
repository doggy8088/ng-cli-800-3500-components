import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1949Component } from './page1949.component';

@NgModule({
  declarations: [Page1949Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1949Component }])],
  exports: [Page1949Component]
})
export class Page1949Module {}
