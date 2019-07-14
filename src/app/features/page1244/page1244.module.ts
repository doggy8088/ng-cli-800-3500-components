import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1244Component } from './page1244.component';

@NgModule({
  declarations: [Page1244Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1244Component }])],
  exports: [Page1244Component]
})
export class Page1244Module {}
