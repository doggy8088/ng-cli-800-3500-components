import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1804Component } from './page1804.component';

@NgModule({
  declarations: [Page1804Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1804Component }])],
  exports: [Page1804Component]
})
export class Page1804Module {}
