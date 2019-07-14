import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1937Component } from './page1937.component';

@NgModule({
  declarations: [Page1937Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1937Component }])],
  exports: [Page1937Component]
})
export class Page1937Module {}
