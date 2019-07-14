import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1485Component } from './page1485.component';

@NgModule({
  declarations: [Page1485Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1485Component }])],
  exports: [Page1485Component]
})
export class Page1485Module {}
