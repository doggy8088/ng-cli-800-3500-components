import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1381Component } from './page1381.component';

@NgModule({
  declarations: [Page1381Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1381Component }])],
  exports: [Page1381Component]
})
export class Page1381Module {}
