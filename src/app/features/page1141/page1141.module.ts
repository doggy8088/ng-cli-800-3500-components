import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1141Component } from './page1141.component';

@NgModule({
  declarations: [Page1141Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1141Component }])],
  exports: [Page1141Component]
})
export class Page1141Module {}
