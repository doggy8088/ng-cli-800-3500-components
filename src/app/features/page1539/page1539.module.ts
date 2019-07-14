import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1539Component } from './page1539.component';

@NgModule({
  declarations: [Page1539Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1539Component }])],
  exports: [Page1539Component]
})
export class Page1539Module {}
