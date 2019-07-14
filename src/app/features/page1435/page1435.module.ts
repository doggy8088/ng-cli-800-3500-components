import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1435Component } from './page1435.component';

@NgModule({
  declarations: [Page1435Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1435Component }])],
  exports: [Page1435Component]
})
export class Page1435Module {}
