import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1311Component } from './page1311.component';

@NgModule({
  declarations: [Page1311Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1311Component }])],
  exports: [Page1311Component]
})
export class Page1311Module {}
