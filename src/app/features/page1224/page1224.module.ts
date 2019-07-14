import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1224Component } from './page1224.component';

@NgModule({
  declarations: [Page1224Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1224Component }])],
  exports: [Page1224Component]
})
export class Page1224Module {}
