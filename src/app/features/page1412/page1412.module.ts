import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1412Component } from './page1412.component';

@NgModule({
  declarations: [Page1412Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1412Component }])],
  exports: [Page1412Component]
})
export class Page1412Module {}
