import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1111Component } from './page1111.component';

@NgModule({
  declarations: [Page1111Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1111Component }])],
  exports: [Page1111Component]
})
export class Page1111Module {}
