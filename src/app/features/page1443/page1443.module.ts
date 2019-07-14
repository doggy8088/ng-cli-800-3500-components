import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1443Component } from './page1443.component';

@NgModule({
  declarations: [Page1443Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1443Component }])],
  exports: [Page1443Component]
})
export class Page1443Module {}
