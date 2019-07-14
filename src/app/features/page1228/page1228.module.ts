import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1228Component } from './page1228.component';

@NgModule({
  declarations: [Page1228Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1228Component }])],
  exports: [Page1228Component]
})
export class Page1228Module {}
