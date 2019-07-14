import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1325Component } from './page1325.component';

@NgModule({
  declarations: [Page1325Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1325Component }])],
  exports: [Page1325Component]
})
export class Page1325Module {}
